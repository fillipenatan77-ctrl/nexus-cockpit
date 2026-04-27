// NEXUS · service worker · v1.0 · 2026-04-27
const CACHE = 'nexus-app-v1-2026-04-27';
const SHELL = ['/v16/app/','/v16/app/index.html','/v16/app/manifest.webmanifest','/icons/icon-192.png','/icons/icon-512.png','/icons/apple-touch-icon-180.png','/icons/favicon.svg'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.hostname === 'script.google.com' || u.hostname === 'rag.nexuscaldeira.com') {
    e.respondWith(fetch(e.request).then(r => { caches.open(CACHE).then(c => c.put(e.request, r.clone())).catch(()=>{}); return r; }).catch(() => caches.match(e.request)));
    return;
  }
  if (SHELL.some(p => u.pathname === p) || u.pathname.startsWith('/v16/app/') || u.pathname.startsWith('/icons/')) {
    e.respondWith(caches.match(e.request).then(c => c || fetch(e.request).then(r => { caches.open(CACHE).then(cache => cache.put(e.request, r.clone())).catch(()=>{}); return r; })));
    return;
  }
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
