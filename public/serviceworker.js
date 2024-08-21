// You can change the number on the end of the site to refresh the cache
const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v3';
const assets = ['/', 'index.html',
  'style.css',
  'app.js',
  'main.js',
  'mail.js',
  'images/article.jpg',
  'images/All4U.jpg',
  'images/PizzaApi.jpg',
  'images/pizzas.jpg',
  'images/VanDelivery.jpg',
  'images/StaffsUniLogo.png',
  'images/android-chrome-512x512.png',
  'images/android-chrome-192x192.png',
  'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap'
  // add all your files in here, in the correct folders. No need to add this file
];
//DO NOT change any of the code below

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch events
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});