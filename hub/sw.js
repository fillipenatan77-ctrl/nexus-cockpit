// NEXUS · Service Worker · v18.9 · 2026-04-28
// Cloud-first · canal direto blindado · network-first para api.nexuscaldeira.com
const CACHE = 'NEXUS_CACHE_v18_9';
const SHELL = [
  '/hub/',
  '/hub/index.html',
  '/hub/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon-180.png',
  '/icons/favicon.svg'
];

self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
));

self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(keys => Promise.all(
    keys.filter(k => k !== CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim())
));

self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  // Network-first com fallback cache para api.nexuscaldeira.com + rag + apps script
  if (u.hostname === 'api.nexuscaldeira.com' || u.hostname === 'rag.nexuscaldeira.com' || u.hostname === 'script.google.com') {
    e.respondWith(
      fetch(e.request).then(r => {
        if (e.request.method === 'GET' && r.ok) {
          caches.open(CACHE).then(c => c.put(e.request, r.clone())).catch(() => {});
        }
        return r;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  // Cache-first para shell + assets
  if (SHELL.some(p => u.pathname === p) || u.pathname.startsWith('/hub/') || u.pathname.startsWith('/icons/')) {
    e.respondWith(
      caches.match(e.request).then(c => c || fetch(e.request).then(r => {
        if (e.request.method === 'GET' && r.ok) {
          caches.open(CACHE).then(cache => cache.put(e.request, r.clone())).catch(() => {});
        }
        return r;
      }))
    );
    return;
  }
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

// Push listener (preparado para iOS 16.4+ · VAPID a injetar pós-deploy)
self.addEventListener('push', e => {
  let data = {};
  try { data = e.data ? e.data.json() : {}; } catch(_) {}
  const title = data.title || 'NEXUS';
  const options = {
    body: data.body || 'Pulse do NEXUS',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    tag: data.tag || 'nexus-pulse',
    data: { url: data.url || '/hub/' },
    requireInteraction: false,
    silent: false
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/hub/';
  e.waitUntil(clients.matchAll({type:'window'}).then(list => {
    for (const c of list) { if (c.url.includes(url) && 'focus' in c) return c.focus(); }
    if (clients.openWindow) return clients.openWindow(url);
  }));
});
