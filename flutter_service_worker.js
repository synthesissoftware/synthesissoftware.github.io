'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a2650a77d9a5a5dcd1cbd0a2c07aaa83",
"assets/assets/logo.gif": "6562075b0972542d53e3a7f5c5d7aa76",
"assets/assets/logo.png": "01f2d88adb9d98687b00391691d5c156",
"assets/assets/patient.png": "cc510715130e6ce6771462bf83b570c4",
"assets/assets/splashscreen.gif": "baa2643255262d85bf2c171bd223877d",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "30990b8e171f7664a21b4220ac42df90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e9b1a363c9aa52c2322bb82da498d9e6",
"/": "e9b1a363c9aa52c2322bb82da498d9e6",
"main.dart.js": "f85d9969d90ba785aa1599c5c0188013",
"manifest.json": "21e667839fceb1c989c7f30db175b6cd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
