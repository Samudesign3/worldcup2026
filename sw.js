const CACHE = "wc2026-v3";
const PRECACHE = ["./index.html", "./manifest.json"];

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

function init() {
  buildGroupTabs();
  document.getElementById('quota').textContent = MAX - getQ();
  renderAll();
  setStatus('靜態資料已就緒', '#a080ea');

  let fetched = false;
  function doFetch() {
    if (fetched) return; fetched = true;
    fetchAll();
    fetchStandings();
    fetchRSS();
  }
  setTimeout(doFetch, 800);
  
  // ← 加在這裡
  window.addEventListener('online', () => fetchAll());
  
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && !fetched) doFetch();
  });
}