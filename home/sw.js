// NEXUS Home · Service Worker v1
const CACHE = 'nexus-home-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
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
  // API dynamic calls: always network-first
  if (url.hostname.includes('script.google.com') || url.hostname.includes('googleapis.com')) {
    e.respondWith(fetch(e.request).catch(() => new Response('{"ok":false,"offline":true}', { headers: { 'Content-Type': 'application/json' } })));
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
