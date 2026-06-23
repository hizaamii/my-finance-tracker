const CACHE_NAME = 'finance-tracker-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sw.js'
];

// Perform install cache registration
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve cached content when available offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
