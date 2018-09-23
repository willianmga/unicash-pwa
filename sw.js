var cacheName = 'cache-one';

var appShellFiles = [
  '/app/app.js',
  '/app/home/home-template.js',
  '/app/home/home-controller.js',
<<<<<<< HEAD
  '/app/add_founds/add-founds-template.js',
=======
  '/app/history/history-controller.js',
>>>>>>> a6e4ca965dd88fffe87f41f98ddca48a74bf6c92
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
