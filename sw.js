var cacheName = 'cache-three';

var appShellFiles = [
  "/app/app.js",
  "/app/service/service-factory.js",
  "/app/service/transaction-service.js",
  "/app/account/account-controller.js",
  "/app/history/history-controller.js",
  "/app/home/home-controller.js",
  "/app/home/home-template.js",
  "/app/refund-money/refund-money-controller.js",
  "/app/refund-money/refund-money-template.js",
  "/app/add_funds/add-funds-controller.js",
  "/app/add_funds/add-funds-template.js",
  "/app/payment/payment-controller.js",
  "/app/payment/payment-template.js",
  "/app/recieve/recieve-controller.js",
  "/app/recieve/recieve-template.js",
  '/materialize.css',
  '/materialize.js'
];

// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(appShellFiles);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
