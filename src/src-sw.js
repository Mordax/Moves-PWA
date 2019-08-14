
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
workbox.precaching.precacheAndRoute([]);

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('runtime').then(function(cache) {
      return cache.addAll(
        [
          "https://moves-backend-a.herokuapp.com/api/content/slug/legal",
          "https://moves-backend-a.herokuapp.com/api/content/slug/thing",
          "https://moves-backend-a.herokuapp.com/api/content/slug/hotel",
        ]
      )
    })
  )
});

workbox.routing.registerRoute(
    new RegExp('https://moves-backend-a.herokuapp.com/api/content/slug/*'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'runtime',
    })
);

self.addEventListener('push', function (event) {
    const data = event.data.json();
    console.log("Getting push data", data);

    // // The BroadcastChannel is mainly used to be able to log messages in the React app as well.
    // // It is not essential for the push or notification functionality.
    // if ('BroadcastChannel' in self) {
    //     const bc = new BroadcastChannel('main_channel');
    //     bc.postMessage(data.msg);
    // }

    event.waitUntil(
        // This is how we show the message to the user.
        // You can check out the documentation for the API here:
        // https://developer.mozilla.org/en-US/docs/Web/API/notification
        self.registration.showNotification(
            // The title in the pop up
            data.title, {
                // The message in the pop up
                body: data.msg,
                // Some vibration on your device
                vibrate: [500, 100, 500]
            })
    );
});

// If you want to handle when the user clicks on a message, you should
// do it by subscribing to this event:
self.addEventListener('notificationclick', function(event) {
    event.notification.close(); // We are overriding default behaviour, so we need to close it ourselves.
    event.waitUntil(clients.openWindow('/alerts')); // Open a new window.
});