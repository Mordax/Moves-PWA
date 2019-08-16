
// The following two lines are added for "workbox injectManifest" to work
// injectManifest requires a precacheAndRoute placeholder to accept the
// auto-generated precache-manifest array of static files to be cached
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
workbox.precaching.precacheAndRoute([]);

// Added to skip waiting registration for service worker updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// All non-protected information are cached at installation stage so that
// users can have all static content cached before visiting the individual pages.
// Enable offline content switching without needing user to view all pages
// to cache them
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('runtime').then(function(cache) {
      // This static array can be generated based on local content.json
      // which holds names and access routes for all contents
      return cache.addAll(
        [
          "https://moves-backend-a.herokuapp.com/api/content/slug/legal",
          "https://moves-backend-a.herokuapp.com/api/content/slug/thing",
          "https://moves-backend-a.herokuapp.com/api/content/slug/hotel",
          "https://moves-backend-a.herokuapp.com/api/content/slug/importantPlace",
          "https://moves-backend-a.herokuapp.com/api/content/slug/help",
          "https://moves-backend-a.herokuapp.com/api/content/slug/information",
          "https://moves-backend-a.herokuapp.com/api/content/slug/about",
          "https://moves-backend-a.herokuapp.com/api/content/slug/contactus"
        ]
      )
    })
  )
});

/**
 * The following four registerRoute are runtime caches of all content routes,
 * including non-protected content routes, and protected annoucement and personnel
 * routes. The phone number routes is integrated from Emergency Contact team,
 * 
 * Using StaleWhileRevalidate built-in strategy will allow the routes being
 * cached first then udpate from network if there are new contents at these
 * routes. The requests will be forwarded from app made requests to the caches,
 * the headers will forwarded as well so unauthorized requests will behave the
 * same as if they are online
 */
// Runtime cache all contents
workbox.routing.registerRoute(
    new RegExp('https://moves-backend-a.herokuapp.com/api/content/slug/*'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'runtime',
    })
);

// Runtime cache all announcements
workbox.routing.registerRoute(
  new RegExp('https://moves-backend-a.herokuapp.com/api/announcement/active'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'runtime',
  })
);

// Runtime cache all personnel
workbox.routing.registerRoute(
  new RegExp('https://moves-backend-a.herokuapp.com/api/personnel/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'runtime',
  })
);

// Runtime cache for phone numbers from team C
workbox.routing.registerRoute(
  new RegExp('https://movesws-teamc-baa.herokuapp.com/api/phoneNumber/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'runtime',
  })
);

/**
 * The push and notificationclick listeners are provided by Guest speaker 
 */
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