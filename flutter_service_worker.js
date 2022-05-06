'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1d07dac40992651404b0e473c92348d0",
"assets/assets/images/appIcon.jpg": "b77d8e10974eb45ba03ee8b77655e495",
"assets/assets/images/appIconAndroid.png": "255fbf8f2837131feae89417383b6893",
"assets/assets/images/appIconIOS.jpg": "66c611a5256d8d8cd30a2c201f33611b",
"assets/assets/images/atendimento.png": "6b8d2017b6678f20d4ec1568a09b1995",
"assets/assets/images/aviso-recebimento.png": "5f23867ee29fbbc0b7c74f1c224f2870",
"assets/assets/images/caixa-aberta-cor.png": "0e154aabf1861fadef42cdefa6c766d5",
"assets/assets/images/caminhao-cor.png": "6a29d0e05f1d9f6ff538368b65a8404f",
"assets/assets/images/carta-aberta-cor.png": "27e2915e06420572c3a33fe2fb9bf024",
"assets/assets/images/cartao.png": "282d0afba88c0e218a623ed0592d1863",
"assets/assets/images/catalogo.png": "5b06eb1673b170e9b9216c58f323507c",
"assets/assets/images/empresa-cor.png": "cd0e990a98297d7a371903ec2a743e23",
"assets/assets/images/empresa.png": "461f67fe22fb07f72f49e87a2580d84a",
"assets/assets/images/fatura.png": "df9b832f2dd472d624eee251676ac153",
"assets/assets/images/ic-logo-correios-empresa-dark.png": "f32241386829bcc9fb424cbf3b5271cc",
"assets/assets/images/ic-logo-correios-empresa.png": "79fec46e9c9a50403b1da3327658f6c5",
"assets/assets/images/ic_cadeado.png": "f300beee25442e90518eab07e44c7305",
"assets/assets/images/ic_configuracoes.png": "cd8f35363a7a513e24845bfa3ee66741",
"assets/assets/images/ic_excluir.png": "559673c69f5006a465515741e1f3f2ea",
"assets/assets/images/ic_iphonex.png": "b12b84b6f6951d714f12c7015de8b85b",
"assets/assets/images/ic_logo_correios.png": "95d96bfd1ecb68e43e5945cea8df15b6",
"assets/assets/images/ic_logo_correios_dark.png": "b1926a1623b00a3c8dbc5e26f28cb969",
"assets/assets/images/ic_sair.png": "cf6b54bdc012e28acf59ba49802b7050",
"assets/assets/images/ic_usuario.png": "f1d3e184f57bedc36aaafe4ea1b7fe37",
"assets/assets/images/mapa-ac.png": "e629172284c0448ad7fc6db5f4ad7ce9",
"assets/assets/images/mapa-al.png": "0a27ec52a8318be8a6371819fa861ad3",
"assets/assets/images/mapa-am.png": "d819b3a60968e081a042b86dbcd23225",
"assets/assets/images/mapa-ap.png": "4cf2ab4571be76e110937296b6af2ec0",
"assets/assets/images/mapa-ba.png": "12d5f38cb4176cfa8a2665e5b1a0abdb",
"assets/assets/images/mapa-brasil.png": "aff24c5cb56bafce7a397bd1568d21fa",
"assets/assets/images/mapa-ce.png": "e911c364959f002375743c0da6f0c5f6",
"assets/assets/images/mapa-df.png": "42b0f9acf4079488c8c9e8d2aadc252e",
"assets/assets/images/mapa-es.png": "e7afa26f272e428f364ac846a753970d",
"assets/assets/images/mapa-go.png": "cec056e29bf3429623913fd791d3cb8b",
"assets/assets/images/mapa-ma.png": "a90180cd24119e7a918b721562e03ba2",
"assets/assets/images/mapa-mg.png": "490b489dea222dbe2ca0cb14d333409a",
"assets/assets/images/mapa-ms.png": "56e20cdb129415e1aa3619e8a7030698",
"assets/assets/images/mapa-mt.png": "85389f00d1f3bfbacab8aba3be6eb300",
"assets/assets/images/mapa-pa.png": "eef202122a5c3c7390c2bc8ee3e00539",
"assets/assets/images/mapa-pb.png": "593557aa7ef2e56995e2c7bf6cd00317",
"assets/assets/images/mapa-pe.png": "f64566f94bd7f7dedfdf5ff4497a8ef4",
"assets/assets/images/mapa-pi.png": "fbb5dad7bfe0f64522f0682de40be258",
"assets/assets/images/mapa-pr.png": "d8259a200c3c61855913b13097b73cbc",
"assets/assets/images/mapa-rj.png": "6a923427cd0462726b487f34ea628ebb",
"assets/assets/images/mapa-rn.png": "de0521351e9459b966c60769df604f51",
"assets/assets/images/mapa-ro.png": "4f89281b9d1048bc5b2641550b6245a7",
"assets/assets/images/mapa-rr.png": "1485668bc666d0a066fa63d7a0dddc92",
"assets/assets/images/mapa-rs.png": "39789492978f0cb2f629018d6235a3bd",
"assets/assets/images/mapa-sc.png": "00b22f592a011b294564230334d91495",
"assets/assets/images/mapa-se.png": "442e3615e7f931a20616cf0753b2358e",
"assets/assets/images/mapa-sp.png": "71b67df565021c99176162a65d489b20",
"assets/assets/images/mapa-to.png": "b94e5b9fa4641e841c0f191e6a873554",
"assets/assets/images/mapa.png": "a25b8747c773617936acb25bfe6e95a0",
"assets/assets/images/ouvidoria.png": "f1f5668ad3d866d5e98228cba3085cb1",
"assets/assets/images/precos-prazos-cor.png": "d363f5de6f55f9e78a29d9f4f65f1741",
"assets/assets/images/prisma_header.png": "103a0c785f82ea6bdca3b5188c91cfd3",
"assets/assets/images/recusar-encomenda-cor.png": "1c3bea86b09dc31557c0603a6bcf6ad0",
"assets/assets/images/relogio-cor.png": "3043c20790d7575178b0a0b5341af892",
"assets/assets/images/suspender.png": "ded4d09d9e226b7a495179b35f4a93f4",
"assets/assets/images/usuario_excluir.png": "c157b9a0b5aa1735ce594bb041cab8a7",
"assets/assets/images/visto-cor.png": "10bc5a60100a08b2a48e220d4cccd6a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "0acee7581c1cdbf81e2fee17f8a9737b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "864cc70caaabbc4f98c3636cf91db221",
"/": "864cc70caaabbc4f98c3636cf91db221",
"main.dart.js": "e21e0af7bf3d15c8a81a74a245a11ccb",
"manifest.json": "45a0f5561ac3608e2f99cb338ec5e344",
"version.json": "21bf4fd93a74d8fd455dcef5545e0b43"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
