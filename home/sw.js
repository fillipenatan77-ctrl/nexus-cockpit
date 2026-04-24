// NEXUS Home · Service Worker v2 (v15.AB · com Push + Background Sync)
const CACHE = 'nexus-home-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './novidades.json',
  './health.json',
  './icons/favicon.svg',
  './icons/apple-touch-icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // API dinâmica: network-first
  if (url.hostname.includes('script.google.com') || url.hostname.includes('googleapis.com') || url.hostname.includes('trycloudflare.com')) {
    e.respondWith(fetch(e.request).catch(() => new Response('{"ok":false,"offline":true}', { headers: { 'Content-Type': 'application/json' } })));
    return;
  }
  // novidades.json e health.json: network-first para sempre pegar o mais novo
  if (url.pathname.endsWith('novidades.json') || url.pathname.endsWith('health.json')) {
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy).catch(() => {}));
        return r;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  // Shell: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy).catch(() => {}));
      return r;
    }).catch(() => caches.match('./index.html')))
  );
});

// ====================================================
// PUSH HANDLER (v15.AB · iOS 16.4+ via PWA standalone)
// ====================================================
self.addEventListener('push', (event) => {
  let payload = {
    title: 'NEXUS',
    body: 'Nova mensagem do sistema',
    tag: 'nexus-push',
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
    data: { url: './' }
  };
  try {
    if (event.data) {
      const received = event.data.json();
      payload = Object.assign(payload, received);
    }
  } catch (e) {}

  event.waitUntil(
    self.registration.showNotification(payload.title, {
      body: payload.body,
      tag: payload.tag || 'nexus-push',
      icon: payload.icon,
      badge: payload.badge,
      vibrate: [200, 80, 200],
      data: payload.data,
      requireInteraction: payload.requireInteraction || false
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
      // Se já tem janela aberta, foca nela
      for (const c of clients) {
        if (c.url.includes('/nexus-cockpit/home') && 'focus' in c) {
          c.navigate(targetUrl);
          return c.focus();
        }
      }
      // Senão abre nova
      if (self.clients.openWindow) return self.clients.openWindow(targetUrl);
    })
  );
});

// ====================================================
// BACKGROUND SYNC · lê novidades.json periodicamente
// ====================================================
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'nexus-novidades-sync') {
    event.waitUntil(checkNovidades());
  }
});

async function checkNovidades() {
  try {
    const r = await fetch('./novidades.json', { cache: 'no-store' });
    const d = await r.json();
    const lastSeen = await (await caches.open(CACHE)).match('/last-novidades-version');
    const lastVer = lastSeen ? await lastSeen.text() : null;
    if (lastVer !== d.versao_atual) {
      await self.registration.showNotification('NEXUS atualizado', {
        body: 'Hub agora em ' + d.versao_atual + ' · toque para ver novidades',
        tag: 'nexus-update',
        icon: './icons/icon-192.png',
        data: { url: './#novidades' }
      });
      const cache = await caches.open(CACHE);
      await cache.put('/last-novidades-version', new Response(d.versao_atual));
    }
  } catch (e) {}
}
