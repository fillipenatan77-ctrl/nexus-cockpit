// NEXUS Cockpit · Service Worker v2 · offline-first agressivo
// Estrategia: precache de TODO o shell + runtime cache de APIs

const CACHE_SHELL = 'nexus-shell-v2';
const CACHE_CDN   = 'nexus-cdn-v2';
const CACHE_API   = 'nexus-api-v2';

// Shell essencial (precachear no install)
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/favicon.svg',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './qr.html',
  './offline.html'
];

// CDNs que tentamos pré-cachear (best-effort, no-cors tolerado)
const CDN = [
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js',
  'https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const shell = await caches.open(CACHE_SHELL);
    await shell.addAll(SHELL.filter(u => !u.includes('apple-touch-icon') && !u.includes('icon-19') && !u.includes('icon-51')));
    // Tenta os demais sem falhar (podem nao existir ainda)
    for (const u of SHELL) {
      try { await shell.add(u); } catch {}
    }
    // Pré-cacheia CDNs em modo no-cors tolerante
    const cdn = await caches.open(CACHE_CDN);
    for (const u of CDN) {
      try { await cdn.add(new Request(u, { mode: 'no-cors' })); } catch {}
    }
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => ![CACHE_SHELL, CACHE_CDN, CACHE_API].includes(k)).map(k => caches.delete(k)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Apps Script /exec → network-first com cache de fallback
  if (url.hostname.includes('script.google.com') || url.hostname.includes('notion.so') || url.pathname.startsWith('/api/')) {
    e.respondWith((async () => {
      try {
        const resp = await fetch(e.request);
        if (resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE_API).then(c => c.put(e.request, clone));
        }
        return resp;
      } catch {
        const c = await caches.match(e.request);
        return c || new Response(JSON.stringify({ ok: false, offline: true, cached: false }), { headers: { 'Content-Type': 'application/json' } });
      }
    })());
    return;
  }
  // Fontes Google → cache-first longo
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    e.respondWith((async () => {
      const c = await caches.match(e.request);
      if (c) return c;
      try {
        const r = await fetch(e.request, { mode: 'no-cors' });
        const clone = r.clone();
        caches.open(CACHE_CDN).then(cc => cc.put(e.request, clone));
        return r;
      } catch { return new Response('', { status: 504 }); }
    })());
    return;
  }
  // CDN Tailwind / Alpine → cache-first
  if (url.hostname.includes('cdn.tailwindcss.com') || url.hostname.includes('unpkg.com')) {
    e.respondWith((async () => {
      const c = await caches.match(e.request);
      if (c) return c;
      try {
        const r = await fetch(e.request);
        if (r.ok) {
          const clone = r.clone();
          caches.open(CACHE_CDN).then(cc => cc.put(e.request, clone));
        }
        return r;
      } catch { return new Response('/* offline */', { headers: { 'Content-Type': 'application/javascript' } }); }
    })());
    return;
  }
  // Shell próprio → cache-first, fallback para offline.html
  e.respondWith((async () => {
    const c = await caches.match(e.request);
    if (c) return c;
    try {
      const r = await fetch(e.request);
      if (r.ok) {
        const clone = r.clone();
        caches.open(CACHE_SHELL).then(cc => cc.put(e.request, clone));
      }
      return r;
    } catch {
      if (e.request.mode === 'navigate') {
        return (await caches.match('./offline.html')) || (await caches.match('./index.html'));
      }
      return new Response('', { status: 504 });
    }
  })());
});
