const CACHE = "wc2026-v3";
const PRECACHE = ["./worldcup-2026.html", "./manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const url = e.request.url;
  // Zafronix API: network-first, fallback to empty JSON
  if (url.includes("zafronix.com")) {
    e.respondWith(
      fetch(e.request).catch(() =>
        new Response(JSON.stringify({ data: [] }), {
          headers: { "Content-Type": "application/json" }
        })
      )
    );
    return;
  }
  // Static assets: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
