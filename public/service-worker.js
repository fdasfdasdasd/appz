
const CACHE_NAME = 'zohaib-tracker-v30';

// Critical assets that must be loaded immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdn.tailwindcss.com', // Keep caching this for offline styling
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap',
  'https://cdn-icons-png.flaticon.com/512/4358/4358665.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // We use addAll but catch errors so one failure doesn't break the whole install
      // (e.g. if an external font is down)
      return cache.addAll(STATIC_ASSETS).catch(err => console.warn('Precaching failed', err));
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

  // Network Only for API calls (GenAI) to avoid caching errors
  if (url.hostname.includes('generativelanguage.googleapis.com')) {
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
        if (!response || response.status !== 200 || (response.type !== 'basic' && response.type !== 'cors')) {
          return response;
        }

        // DYNAMIC CACHING:
        // Cache assets from our own origin (Vite bundled JS/CSS) 
        // AND specific external assets like Unsplash images or Tailwind
        if (
             url.origin === self.location.origin || 
             url.hostname.includes('unsplash.com') || 
             url.hostname.includes('cdn.tailwindcss.com') ||
             url.hostname.includes('fonts.gstatic.com')
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
