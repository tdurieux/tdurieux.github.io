/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9b154cb9f3cb1a0da06ce7fa02c98584"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "3e10fa75dfc57d6342f9c2f929789aff"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "4f3f38291244b01720ea3aca9ce99875"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "8732357c4eb867834d137d8874925bb9"
  },
  {
    "url": "assets/css/0.styles.c3b1e521.css",
    "revision": "49d2b8989362b5e67442abfaf73f0253"
  },
  {
    "url": "assets/img/profile.bd5060d4.jpg",
    "revision": "bd5060d46495fa5c2f1db5962d831a54"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.83310c72.js",
    "revision": "4e4a2b8eb96db68a986261f8dc148724"
  },
  {
    "url": "assets/js/11.c266f2c1.js",
    "revision": "e0e8eece9e0be00acc94c6522519e0a6"
  },
  {
    "url": "assets/js/12.3195f546.js",
    "revision": "d26c6a83ce152cf9dc3474a474c5bfb4"
  },
  {
    "url": "assets/js/13.447c4df8.js",
    "revision": "faff7b7dc621c93c27e054a7eb52f983"
  },
  {
    "url": "assets/js/14.522f7ae1.js",
    "revision": "2c737ccbc25c3c774258383c667f33b3"
  },
  {
    "url": "assets/js/15.b14f774a.js",
    "revision": "2b563c8f44c8740775aa364db17aa09b"
  },
  {
    "url": "assets/js/16.1655b1bf.js",
    "revision": "8b394ca0d4a6b16e3ce989b6eda380d7"
  },
  {
    "url": "assets/js/17.2d4b6a70.js",
    "revision": "93c41d3af557fab6199ff2c46393f199"
  },
  {
    "url": "assets/js/18.f6d378e7.js",
    "revision": "793c02da0d1df43166fadd328b2e9cf1"
  },
  {
    "url": "assets/js/19.b10cbdc5.js",
    "revision": "3d6845e6ab5a425ad246364d02d70f83"
  },
  {
    "url": "assets/js/2.23124c79.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/20.bed80e4a.js",
    "revision": "0206750752dc8b2afe6e4701d0548d44"
  },
  {
    "url": "assets/js/21.0fe38518.js",
    "revision": "fce0cdc98454da9ec5bb2841c4890862"
  },
  {
    "url": "assets/js/22.844aa017.js",
    "revision": "773f4ada0e8c0197d0122be67ec837fe"
  },
  {
    "url": "assets/js/23.9cfadcb5.js",
    "revision": "7e0435b43e36590bb251efb9233ec81f"
  },
  {
    "url": "assets/js/24.2e6a87c2.js",
    "revision": "bf8b824457ad9eba447673548c2f05db"
  },
  {
    "url": "assets/js/25.caec2c75.js",
    "revision": "6f961761c8d8b22107d563dfef165efa"
  },
  {
    "url": "assets/js/3.f9745dd9.js",
    "revision": "6dd4eeabe7b76b77435b81149a0aed7a"
  },
  {
    "url": "assets/js/4.946f3ad6.js",
    "revision": "51a36285c30d5636bbcb57546f9a085d"
  },
  {
    "url": "assets/js/5.fbc81608.js",
    "revision": "2fe71d37fd327055dc223943bf94937d"
  },
  {
    "url": "assets/js/6.710cb648.js",
    "revision": "5eb472c939d682e7c4e468d0e1362726"
  },
  {
    "url": "assets/js/7.aa323b0c.js",
    "revision": "82f43aa782cd5ada747bd70428fa89f4"
  },
  {
    "url": "assets/js/8.f8f0d2e6.js",
    "revision": "87d55c2c3dab3bef3c8851ed67920a37"
  },
  {
    "url": "assets/js/9.0de6dedc.js",
    "revision": "48255cc79eb8915be948ba9947cc6a3b"
  },
  {
    "url": "assets/js/app.ba52751d.js",
    "revision": "d47b589f4f7404f01914b56b998b3697"
  },
  {
    "url": "background.png",
    "revision": "6a243f0dd75156442aee1debea8c669d"
  },
  {
    "url": "blog/2018/04/02.html",
    "revision": "3a6cdc2be3687d5d2f2644efe7ad6d62"
  },
  {
    "url": "blog/index.html",
    "revision": "0903e4e5cb37ca08fe672f40409ebc05"
  },
  {
    "url": "blog/spoon_getting_started.png",
    "revision": "60eb8d8b187c69a45ef03ad2ba595ca5"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "b15298e3d5f32e16d3b66a4d9278104f"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "36e8b3283897770b719680418651217a"
  },
  {
    "url": "index.html",
    "revision": "ba395b0274f647c4f6fe9701d9604a7f"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "da030d3f504da72843cd37960ca9df9b"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "37ae216f5e7e5e36a2a7ca7b348bca5f"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "c19de00e7f0362d517db808b87316cca"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "64bbbd7f7188ff2f10301566136b1ec5"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "785ddeaf82f0d081aab6e42aa41014d1"
  },
  {
    "url": "path4830-3-4-9.png",
    "revision": "c554666b48428d010279fda029990649"
  },
  {
    "url": "projects/anonymous_github.html",
    "revision": "c9f9e6b0e11c561b70c582457856feaa"
  },
  {
    "url": "projects/bibtex2wiki.html",
    "revision": "a8b0dcb539843c6dcc1dc65a5a69c4d3"
  },
  {
    "url": "projects/bibtextowiki.png",
    "revision": "727afc99860fcbf4e309948434dfcbf1"
  },
  {
    "url": "projects/bikiniproxy.html",
    "revision": "d49a1074c8354ffb9ba60ad61c2dc26f"
  },
  {
    "url": "projects/bikiniproxy.png",
    "revision": "a94a56fe7d893681e077b925fedca82c"
  },
  {
    "url": "projects/bluelatex.html",
    "revision": "262db09e3e6f51b22fbc412ba13767d0"
  },
  {
    "url": "projects/bluelatex.jpg",
    "revision": "565f517b830beb2ba71ddacf52d09f83"
  },
  {
    "url": "projects/c2spoon.html",
    "revision": "2afd0c50cc486717324f5f8436e566e9"
  },
  {
    "url": "projects/defects4j_dissection.html",
    "revision": "6722ed7fbc5a16b5acb38d46c2ef6d50"
  },
  {
    "url": "projects/defects4j_dissection.png",
    "revision": "5bae8fc21a9f9581a274e271c32d315d"
  },
  {
    "url": "projects/github_anonymous.png",
    "revision": "132bb52d0d19094a074365b5be0c86bb"
  },
  {
    "url": "projects/index.html",
    "revision": "302931a73a253846442618a6b0f16c59"
  },
  {
    "url": "projects/introclass_java.html",
    "revision": "8ec05bee55208f176aa1e7a85de5cd29"
  },
  {
    "url": "projects/itzal.html",
    "revision": "20e10a311f839ccf7a1ca2dead2a4cea"
  },
  {
    "url": "projects/leboncoin.html",
    "revision": "522e15122a99212c3213c6fd9a29d98b"
  },
  {
    "url": "projects/leboncoin.png",
    "revision": "c889c80f59a475b48e28c36c0cc5fa66"
  },
  {
    "url": "projects/maven-repair.html",
    "revision": "95a1bcb840bd92d053e2cebe8e42478f"
  },
  {
    "url": "projects/nopol.html",
    "revision": "cafbdc82a44c029e3e756b7860e92084"
  },
  {
    "url": "projects/nopol.png",
    "revision": "25db08d1436aa77571ce8a19c296604a"
  },
  {
    "url": "projects/npefix.html",
    "revision": "a6242a6afb0ac5082d829da2652a0d7f"
  },
  {
    "url": "projects/npefix.png",
    "revision": "431a9baf7267a03b09f269c24172fd1d"
  },
  {
    "url": "projects/spoon.html",
    "revision": "996c8074d7162730e5cf6c285a9d554f"
  },
  {
    "url": "projects/spoon.png",
    "revision": "60eb8d8b187c69a45ef03ad2ba595ca5"
  },
  {
    "url": "projects/synctexjs.html",
    "revision": "b74b4e5bcf4c6ec34b1db392b20ff39b"
  },
  {
    "url": "research.html",
    "revision": "bb34ea5d83179680b3e3ee268e440a94"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "de45e1813d0952ef924aea063a1d09c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
