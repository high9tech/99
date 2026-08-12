const CACHE_NAME = 'hightech-ps-v1';
// قائمة بالملفات التي يجب تخزينها لعمل الصفحة بدون إنترنت
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',      // غير اسم الملف إن كان مختلفاً لديك
  './script.js',     // غير اسم الملف إن كان مختلفاً لديك
  './favicon.ico'     // أي صور أو خطوط تستخدمها الصفحة
];

// تثبيت الكاش وتنزيل الملفات
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// تفعيل الكاش وحذف النسخ القديمة
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// استدعاء الملفات من الكاش عند عدم وجود إنترنت
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
