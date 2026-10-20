/* Obslužný skript: drží hru v zásobě, aby šla spustit i bez signálu.
   Nejdřív síť (nová verze se po nahrání projeví sama), když není, zásoba.
   Mapová data z Overpassu jdou mimo — ukládá si je hra sama. */
const ZASOBA = "trhlina-190";
const SOUBORY = ["./", "./index.html", "./manifest.webmanifest", "./ikona-192.png", "./ikona-512.png", "./ikona-512-maskable.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(ZASOBA).then(c => c.addAll(SOUBORY)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== ZASOBA).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin || e.request.method !== "GET") return;
  e.respondWith(fetch(e.request)
    .then(r => { if (r.ok) { const k = r.clone(); caches.open(ZASOBA).then(c => c.put(e.request, k)); } return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
