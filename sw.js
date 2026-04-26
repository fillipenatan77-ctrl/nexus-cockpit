// NEXUS Home · Service Worker v3 (v15.BR · offline total · 16 fichas + 16 cards + páginas)
const CACHE = 'nexus-home-v3';
const RUNTIME = 'nexus-runtime-v3';

// 16 obras integrais (slugs e arquivos canônicos)
const OBRAS_FILES = [
  'Freud_Interpretacao_Sonhos_menor',
  'NevesDaSilva_Citacoes_Pensamentos_Freud',
  'Suy_Amor_e_Desejo_Dissertacao_UFPR',
  'Bandler Grinder - Padroes das Tecnicas Hipnoticas de Milton H Erickson (1975)',
  'Bandler_Grinder_Estrutura_da_Magia_Vol_II',
  'Bandler_Grinder_Reframing',
  'Rosen_My_Voice_Will_Go_With_You',
  'Shakespeare_Hamlet_ptBR',
  'Shakespeare_Romeu_e_Julieta_ptBR',
  'Shakespeare_Rei_Lear_ptBR',
  'Allen_Tecnicas_Proibidas_Persuasao',
  'Autoria coletiva - O Principe no Trono de Ferro - Game of Thrones e Maquiavel',
  'Goleman_Inteligencia_Emocional',
  'OBrien_How_to_Develop_Perfect_Memory_v1_1MB',
  'OBrien_How_to_Develop_Perfect_Memory_v2_1.6MB',
  'OBrien_How_to_Develop_Perfect_Memory_v3_2MB'
];
const SLUGS = [
  'freud-sonhos','neves-freud','suy-lacan','bandler-padroes','bandler-magia',
  'bandler-reframing','rosen-erickson','hamlet','romeu-julieta','rei-lear',
  'allen-persuasao','maquiavel-got','goleman-ie','obrien-memoria-v1',
  'obrien-memoria-v2','obrien-memoria-v3'
];

const SHELL = [
  '/home/',
  '/home/index.html',
  '/home/integrais.html',
  '/home/sugestao.html',
  '/home/agenda.html',
  '/home/stats.html',
  '/home/system-prompt.html',
  '/home/notificacoes.html',
  '/home/iphone-setup.html',
  '/home/coaching.html',
  '/home/pulse.html',
  '/home/offline.html',
  '/home/manifest.json',
  '/home/novidades.json',
  '/home/health.json',
  '/home/icons/favicon.svg',
  '/home/icons/apple-touch-icon-180.png',
  '/home/icons/icon-192.png',
  '/home/icons/icon-512.png',
  '/c/',
  '/c/index.html'
];

// Páginas /c/<slug>/
const C_ROUTES = SLUGS.map(s => `/c/${s}/`);

// Fichas + cards (mesma origem · paths /fichas/ e /cards/)
const FICHAS = OBRAS_FILES.map(f => `/fichas/${encodeURI(f)}.md`);
const CARDS = OBRAS_FILES.map(f => `/cards/${encodeURI(f)}.svg`);

const PRECACHE_LIST = [...SHELL, ...C_ROUTES, ...FICHAS, ...CARDS];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // addAll falha tudo se 1 falhar · usar add() individual com try
    let ok = 0, fail = 0;
    for (const url of PRECACHE_LIST) {
      try { await cache.add(url); ok++; }
      catch (err) { fail++; }
    }
    console.log(`[NEXUS SW v3] precache: ${ok} ok · ${fail} fail · de ${PRECACHE_LIST.length}`);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE && k !== RUNTIME).map(k => caches.delete(k)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Apps Script + Cloudflare tunnel: network-first com fallback offline JSON
  if (url.hostname.includes('script.google.com') || url.hostname.includes('rag.nexuscaldeira.com') || url.hostname.includes('googleapis.com')) {
    e.respondWith(
      fetch(e.request).catch(() =>
        new Response('{"ok":false,"offline":true,"hint":"reabra com rede para atualizar"}',
          { headers: { 'Content-Type': 'application/json' } })
      )
    );
    return;
  }

  // raw.githubusercontent.com (fichas/cards puxados via JS): cache-first
  if (url.hostname === 'raw.githubusercontent.com') {
    e.respondWith(cacheFirst(e.request, RUNTIME));
    return;
  }

  // Mesma origem (nexuscaldeira.com / GitHub Pages)
  if (url.origin === self.location.origin) {
    // novidades.json + health.json: network-first (sempre buscar mais novo)
    if (url.pathname.endsWith('novidades.json') || url.pathname.endsWith('health.json')) {
      e.respondWith(networkFirst(e.request, CACHE));
      return;
    }
    // fichas/cards/HTML: stale-while-revalidate
    e.respondWith(staleWhileRevalidate(e.request, CACHE));
    return;
  }

  // Default: network-first com offline fallback
  e.respondWith(
    fetch(e.request).catch(() => caches.match('/home/offline.html'))
  );
});

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;
  try {
    const r = await fetch(req);
    if (r.ok) cache.put(req, r.clone()).catch(() => {});
    return r;
  } catch (e) {
    return new Response('', { status: 504 });
  }
}

async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const r = await fetch(req);
    if (r.ok) cache.put(req, r.clone()).catch(() => {});
    return r;
  } catch (e) {
    const cached = await cache.match(req);
    return cached || new Response('{"offline":true}', { headers: { 'Content-Type': 'application/json' } });
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  const fetchPromise = fetch(req).then(r => {
    if (r.ok) cache.put(req, r.clone()).catch(() => {});
    return r;
  }).catch(() => null);
  return hit || fetchPromise || caches.match('/home/offline.html');
}

// ====================================================
// PUSH HANDLER (preservado de v2)
// ====================================================
self.addEventListener('push', (event) => {
  let payload = {
    title: 'NEXUS',
    body: 'Nova mensagem do sistema',
    tag: 'nexus-push',
    icon: '/home/icons/icon-192.png',
    badge: '/home/icons/icon-192.png',
    data: { url: '/home/' }
  };
  try {
    if (event.data) {
      payload = Object.assign(payload, event.data.json());
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
  const targetUrl = (event.notification.data && event.notification.data.url) || '/home/';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
      for (const c of clients) {
        if (c.url.includes('nexuscaldeira.com') && 'focus' in c) {
          c.navigate(targetUrl);
          return c.focus();
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(targetUrl);
    })
  );
});

// Periodic sync (Android Chrome only · iOS ignora · sem prejuízo)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'nexus-novidades-sync') {
    event.waitUntil(checkNovidades());
  }
});

async function checkNovidades() {
  try {
    const r = await fetch('/home/novidades.json', { cache: 'no-store' });
    const d = await r.json();
    const cache = await caches.open(CACHE);
    const lastSeen = await cache.match('/last-novidades-version');
    const lastVer = lastSeen ? await lastSeen.text() : null;
    if (lastVer !== d.versao_atual) {
      await self.registration.showNotification('NEXUS · ' + d.versao_atual, {
        body: (d.entradas[0] || {}).titulo || 'novidade no hub',
        tag: 'nexus-update-' + d.versao_atual,
        icon: '/home/icons/icon-192.png',
        data: { url: '/home/' }
      });
      await cache.put('/last-novidades-version', new Response(d.versao_atual));
    }
  } catch (e) {}
}

// Mensagem do client para forçar update do precache
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'precache_now') {
    caches.open(CACHE).then(async cache => {
      let ok = 0, fail = 0;
      for (const url of PRECACHE_LIST) {
        try {
          const r = await fetch(url, { cache: 'no-cache' });
          if (r.ok) { await cache.put(url, r); ok++; } else fail++;
        } catch (e) { fail++; }
      }
      event.ports[0]?.postMessage({ ok, fail, total: PRECACHE_LIST.length });
    });
  }
});
