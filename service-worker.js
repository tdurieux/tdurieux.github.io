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
    "revision": "a3d6b0d9a02fe7aaeabe77633b120a86"
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
    "url": "assets/css/0.styles.e978d397.css",
    "revision": "ddd1dcf41b68894b0b780392c251254b"
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
    "url": "assets/js/10.0b427016.js",
    "revision": "d4dcdb529b17344043f7f46b49d96ea6"
  },
  {
    "url": "assets/js/11.a6a69b61.js",
    "revision": "a0027e4873146f81781f53cb369beff3"
  },
  {
    "url": "assets/js/12.bdbcb810.js",
    "revision": "697f4e114571df32ea7a3307080cb262"
  },
  {
    "url": "assets/js/13.0168519f.js",
    "revision": "0fbb4cebae74b7eec2da173461562748"
  },
  {
    "url": "assets/js/14.c06c6dcc.js",
    "revision": "6a4808d7b63adcc84b927576d185f3e6"
  },
  {
    "url": "assets/js/15.e4c25c09.js",
    "revision": "ccf6a2fbf6f8325c67e3aee738ec3767"
  },
  {
    "url": "assets/js/16.e6d69957.js",
    "revision": "d14b05332c89739fe12ae45785a1e92c"
  },
  {
    "url": "assets/js/17.fbab8508.js",
    "revision": "f15314398d5b656bd2b71d9ba69b3fc2"
  },
  {
    "url": "assets/js/18.89fb8a18.js",
    "revision": "0dfb9062c97ad69ce7bd64a62b9ca1ae"
  },
  {
    "url": "assets/js/19.12555631.js",
    "revision": "77a467acd605a94ce0a138715f9008e4"
  },
  {
    "url": "assets/js/2.23124c79.js",
    "revision": "93b008680a27e9c605ab21eb314d9066"
  },
  {
    "url": "assets/js/20.64eb8187.js",
    "revision": "bf8945c4ff08def04473a955f28f95cc"
  },
  {
    "url": "assets/js/21.8f45ae29.js",
    "revision": "6f64fe7710ddacf37893454d5ef43c89"
  },
  {
    "url": "assets/js/22.51e809e4.js",
    "revision": "0a083a3d74d58c3c8a2bedf8e959ec37"
  },
  {
    "url": "assets/js/23.74f3d9f1.js",
    "revision": "0a6dd200936814d83396fc6437e7af6e"
  },
  {
    "url": "assets/js/24.96289de5.js",
    "revision": "e09206ab165c29857101a5322dc35e96"
  },
  {
    "url": "assets/js/25.28e9f901.js",
    "revision": "3668a9b9fb4e356d709a872ba5c4a584"
  },
  {
    "url": "assets/js/3.ad0a49fb.js",
    "revision": "91e142d09063041aca42018295b0bfe9"
  },
  {
    "url": "assets/js/4.113d39c4.js",
    "revision": "72f14c89d4a447222492249ab4ef4ca9"
  },
  {
    "url": "assets/js/5.20a74c69.js",
    "revision": "3109494ed60d80ea704254edf040282e"
  },
  {
    "url": "assets/js/6.4210109c.js",
    "revision": "8acfde0fb1124bba3f5be88b39865a14"
  },
  {
    "url": "assets/js/7.e376c0e5.js",
    "revision": "7499072cde275ea8121c9f56a877d468"
  },
  {
    "url": "assets/js/8.20b2902b.js",
    "revision": "7f769f3ec62b62892c1b483237d0b421"
  },
  {
    "url": "assets/js/9.b7e61af4.js",
    "revision": "b8cd02297f539a2dfe475622e7ebb565"
  },
  {
    "url": "assets/js/app.33051a58.js",
    "revision": "065e3a27eef8df9f1c98e869cfd2aca0"
  },
  {
    "url": "background.png",
    "revision": "6a243f0dd75156442aee1debea8c669d"
  },
  {
    "url": "blog/2018/04/02.html",
    "revision": "2bf86152ed44ffa0c104089b27b1ee18"
  },
  {
    "url": "blog/index.html",
    "revision": "1e9538840c8227117bf997ab91052556"
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
    "revision": "0a86b0852f05046b971c83baecf5edbe"
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
    "revision": "05c4fd012881cbd86c1715a2b8148619"
  },
  {
    "url": "projects/bibtex2wiki.html",
    "revision": "a30c95c2b5c9077949df356c926cfd3b"
  },
  {
    "url": "projects/bibtextowiki.png",
    "revision": "727afc99860fcbf4e309948434dfcbf1"
  },
  {
    "url": "projects/bikiniproxy.html",
    "revision": "2885ea91d18ce9f074bcd988a874c8c6"
  },
  {
    "url": "projects/bikiniproxy.png",
    "revision": "a94a56fe7d893681e077b925fedca82c"
  },
  {
    "url": "projects/bluelatex.html",
    "revision": "cf9ebb7097464461147250785bea541a"
  },
  {
    "url": "projects/bluelatex.jpg",
    "revision": "565f517b830beb2ba71ddacf52d09f83"
  },
  {
    "url": "projects/c2spoon.html",
    "revision": "737d771a7c5e544355e3902b127bef8d"
  },
  {
    "url": "projects/defects4j_dissection.html",
    "revision": "cfd86ea7ddd3d947c96bb3ceed9ff038"
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
    "revision": "a7ef039ad4e058865d8f3e30bf04e2c7"
  },
  {
    "url": "projects/introclass_java.html",
    "revision": "36f6fcc527bc7f73e646d0d909e470fe"
  },
  {
    "url": "projects/itzal.html",
    "revision": "6e4a05f29e66cd792c52ccb5600aa7a3"
  },
  {
    "url": "projects/leboncoin.html",
    "revision": "39ce33887c942dcb0f283132e73ea381"
  },
  {
    "url": "projects/leboncoin.png",
    "revision": "c889c80f59a475b48e28c36c0cc5fa66"
  },
  {
    "url": "projects/maven-repair.html",
    "revision": "55c24666fd5b19f720c6906efdb75f0d"
  },
  {
    "url": "projects/nopol.html",
    "revision": "295cdf4b885cfb9af17c7c75d9398fb5"
  },
  {
    "url": "projects/nopol.png",
    "revision": "25db08d1436aa77571ce8a19c296604a"
  },
  {
    "url": "projects/npefix.html",
    "revision": "c8f0e5ce846676d0512311fc126dbee7"
  },
  {
    "url": "projects/npefix.png",
    "revision": "431a9baf7267a03b09f269c24172fd1d"
  },
  {
    "url": "projects/spoon.html",
    "revision": "4982e0860d9588af5005644581760dc8"
  },
  {
    "url": "projects/spoon.png",
    "revision": "60eb8d8b187c69a45ef03ad2ba595ca5"
  },
  {
    "url": "projects/synctexjs.html",
    "revision": "33480a9c98d6ab00bc4e1f49a380856f"
  },
  {
    "url": "research.html",
    "revision": "579ae5ce603c8250acc923db08f24324"
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
