// ランク戦タクティクス サービスワーカー
// 新しい版を置いたら、下の CACHE の文字を変える（例：rwt-v5.0-2）
const CACHE='rwt-v5.0';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  // ゲーム本体：通信できれば最新を取得、オフラインなら保存済みを使う
  if(req.mode==='navigate'||(url.origin===location.origin&&url.pathname.endsWith('.html'))){
    e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));return r;}).catch(()=>caches.match('./index.html')));
    return;
  }
  // 同じサイトのファイル（アイコンなど）：保存済みを優先
  if(url.origin===location.origin){
    e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp));return r;})));
    return;
  }
  // フォント・通信用ライブラリ：保存済みをすぐ使い、裏で更新
  if(/fonts\.(googleapis|gstatic)\.com|cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|unpkg\.com/.test(url.host)){
    e.respondWith(caches.open(CACHE).then(c=>c.match(req).then(hit=>{const net=fetch(req).then(r=>{if(r.ok||r.type==='opaque')c.put(req,r.clone());return r;}).catch(()=>hit);return hit||net;})));
  }
});
