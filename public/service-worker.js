'use strict';

const CACHE_NAME = 'moves-cache-v1';

const FILES_TO_CACHE = [
  '/offline.html',
];

self.addEventListener('install', (evt) => {
  console.log('[Service-worker] installing');
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service-worker] Pre-caching offline pages');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (evt) => {
  console.log('[Service-worker] activating');
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          console.log('[Service-worker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

// Fetch handler only needs to handle page navigations
self.addEventListener('fetch', (evt) => {
  console.log('[Service-worker] Fetching from ', evt.request.url);
  if (evt.request.mode !== 'navigate') {
    return;
  }
  evt.respondWith(
    fetch(evt.request)
      .cache(() => {
        return caches.open(CACHE_NAME)
          .then((cache) => {
            return cache.match('offline.html');
          });
      })
  );
});