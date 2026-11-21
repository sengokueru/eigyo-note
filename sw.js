// 移転（ORBIT・https://sengokueru.github.io/orbit/）：古い版のキャッシュを消して、自分を外す
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  const pre = 'eigyo-' + encodeURIComponent(self.registration.scope) + '-';
  for (const k of await caches.keys()) if (k.startsWith(pre)) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://sengokueru.github.io/orbit/');
})()));
