const cacheName = 'business-v1';
const staticAssets = [
	'./',
	'./index.html',
	'./js/main.js',
	'./css/style.css',
	'./manifest.webmanifest'
];
var self = this;
self.addEventListener('install', async e => {
	const cache = await caches.open(cacheName);
	await cache.addAll(staticAssets);
	return self.skipWaiting();
});

self.addEventListener('activate', e => {
	self.clients.claim();

});

self.addEventListener('fetch', e =>{
	const req = e.request;
	const url = new URL(req.url);

	if(url.origin === location.origin){ 
		e.respondWith(cacheFirst(req));
	}else{
		e.respondWith(networkAndCache(req));
	}
})

async function cacheFirst(req){
	const cache = await caches.open(cacheName);
	const cached = await cache.match(req);
	return cached || fetch(req);
}

async function networkAndCache(req){
	const cahe = await caches.open(cacheName);

	try{
		const fresh = await fetch(req);
		await cache.put(req, fresh.clone());
		return fresh;

	}catch (e){
		const cached = awwait cache.match(req);
		return cached;
	}
}