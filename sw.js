const staticCache = "Static_Cache-v1";
const dynamicCache = "Dynamic_Cache-v1";

const preCachedAssets = [
  "dist/main.css",
  // certificate images
  "assets/certficates/net-ninja-js.webp",
  "assets/certficates/net-ninja-react-firebase.webp",
  "assets/certficates/udemy-advanced-css-sass.webp",
  "assets/certficates/udemy-email-development.webp",
  "assets/certficates/udemy-html-css.webp",
  // work 1 images
  "assets/portfolio/work-1-img-1.webp",
  "assets/portfolio/work-1-img-2.webp",
  "assets/portfolio/work-1-img-3.webp",
  // work 2 images
  "assets/portfolio/work-2-img-1.webp",
  "assets/portfolio/work-2-img-2.webp",
  "assets/portfolio/work-2-img-3.webp",
  // work 3 images
  "assets/portfolio/work-3-img-1.webp",
  "assets/portfolio/work-3-img-2.webp",
  // work 4 images
  "assets/portfolio/work-4-img-1.webp",
  "assets/portfolio/work-4-img-2.webp",
  "assets/portfolio/work-4-img-3.webp",
  // work 5 images
  "assets/portfolio/work-5-img-1.webp",
  "assets/portfolio/work-5-img-2.webp",
  "assets/portfolio/work-5-img-3.webp",
  // work 6 images
  "assets/portfolio/work-6-img-1.webp",
  "assets/portfolio/work-6-img-2.webp",
  "assets/portfolio/work-6-img-3.webp",
  // work 7 images
  "assets/portfolio/work-7-img-1.webp",
  "assets/portfolio/work-7-img-2.webp",
  "assets/portfolio/work-7-img-3.webp",
  // skills images
  "assets/skills/css.webp",
  "assets/skills/gulp.webp",
  "assets/skills/html.webp",
  "assets/skills/js.webp",
  "assets/skills/node.webp",
  "assets/skills/php.webp",
  "assets/skills/react.webp",
  "assets/skills/sass.webp",
  // other images
  "assets/bg.webp",
  "assets/favicon.webp",
  "assets/sprite.svg",
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(staticCache)
      .then(cache => cache.addAll(preCachedAssets))
      .catch(err => console.log(err))
  )
})
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== staticCache && key !== dynamicCache).map(key => caches.delete(key))       
      )
    })
  )
});
self.addEventListener("fetch", e => {
  e.respondWith((async () => {
    const cachedResult = await caches.match(e.request);
    if(cachedResult) return cachedResult;

    const response = await fetch(e.request);
    if(!response) return response;

    const responseToCache = response.clone();
    const cache = await caches.open(dynamicCache);
    await cache.put(e.request, responseToCache);

    return response;
  })())
});