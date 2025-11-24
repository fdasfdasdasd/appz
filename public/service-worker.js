
const CACHE_NAME = 'zohaib-tracker-v35';

// Critical assets that must be loaded immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/index.tsx',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap',
  'https://cdn-icons-png.flaticon.com/512/4358/4358665.png',
  // Critical CDN Libraries matching importmap in index.html
  'https://aistudiocdn.com/react@^19.2.0',
  'https://aistudiocdn.com/react-dom@^19.2.0',
  'https://aistudiocdn.com/lucide-react@^0.554.0',
  'https://aistudiocdn.com/@google/genai@^1.30.0',
  'https://aistudiocdn.com/@vitejs/plugin-react@^5.1.1',
  'https://aistudiocdn.com/vite@^7.2.4'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Attempt to cache all assets. We use individual promises so one failure 
      // (like a strict CORS issue on an image) doesn't break the entire install.
      return Promise.all(
        STATIC_ASSETS.map(url => 
          cache.add(url).catch(err => console.warn('SW: Failed to pre-cache', url, err))
        )
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(
      names.map((name) => {
        if (name !== CACHE_NAME) return caches.delete(name);
      })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Network Only for API calls to avoid caching dynamic data incorrectly
  if (url.hostname.includes('generativelanguage.googleapis.com') || url.hostname.includes('api.aladhan.com')) {
    return;
  }

  // Stale-While-Revalidate / Cache First Hybrid
  event.respondWith(
    caches.match(event.request).then((cached) => {
      // If found in cache, return it
      if (cached) return cached;

      // Otherwise fetch from network
      return fetch(event.request).then((response) => {
        // Check if valid response
        if (!response || response.status !== 200 || (response.type !== 'basic' && response.type !== 'cors' && response.type !== 'opaque')) {
          return response;
        }

        // DYNAMIC CACHING:
        // Cache assets from our own origin AND specific external assets (Unsplash, CDNs)
        if (
             url.origin === self.location.origin || 
             url.hostname.includes('unsplash.com') || 
             url.hostname.includes('cdn.tailwindcss.com') ||
             url.hostname.includes('fonts.gstatic.com') ||
             url.hostname.includes('aistudiocdn.com')
           ) {
           const responseToCache = response.clone();
           caches.open(CACHE_NAME).then((cache) => {
             cache.put(event.request, responseToCache);
           });
        }
        
        return response;
      }).catch(() => {
        // OFFLINE FALLBACK
        // If fetch fails (offline) and not in cache, return index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
