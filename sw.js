// Version 1.0.2 - Updated pediatrics and obese patients logic and calcultions
const CACHE_NAME = 'abdowthesia-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png',
  'https://html2canvas.hertzen.com/dist/html2canvas.min.js'
];

// Install the service worker and cache everything
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
