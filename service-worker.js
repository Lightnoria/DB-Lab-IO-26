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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "c830fb6834bec063abad0b65db4dbed9"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.874f5e71.css",
    "revision": "65297f51f5cab3bf1a2f70191982a0c8"
  },
  {
    "url": "assets/img/add_payment_test.64afe95c.png",
    "revision": "64afe95c7bc48703be6f4915907ccdbd"
  },
  {
    "url": "assets/img/add_payment.16049578.png",
    "revision": "160495783c19b38c793dd90a18224aef"
  },
  {
    "url": "assets/img/delete_payment_test.650601b1.png",
    "revision": "650601b1c34532eb9e566d1bedc8c5d2"
  },
  {
    "url": "assets/img/delete_payment.e0557188.png",
    "revision": "e0557188f47e029eaa2c5d7bd119a380"
  },
  {
    "url": "assets/img/get_payment_by_id.7b7469a0.png",
    "revision": "7b7469a0a2bd68222a01768aa48f5db7"
  },
  {
    "url": "assets/img/get_payments_by_project_id.6ccb9d00.png",
    "revision": "6ccb9d00d4409bd914a947e07cb70c1d"
  },
  {
    "url": "assets/img/get_payments.61f7eb5a.png",
    "revision": "61f7eb5a2bb32c3eca8585eb92b8b424"
  },
  {
    "url": "assets/img/MySQL.8db3eeeb.png",
    "revision": "8db3eeebdfb320985ce9aec2fee77203"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_payment_test.4d7ebb46.png",
    "revision": "4d7ebb46acfbd978321e945f15685bad"
  },
  {
    "url": "assets/img/update_payment.33ef2503.png",
    "revision": "33ef2503d77d22ae639727b2efa8a41b"
  },
  {
    "url": "assets/js/10.969eb352.js",
    "revision": "b93f0ad6cc7fa061ebbfe4cbba60db62"
  },
  {
    "url": "assets/js/11.867d6bf2.js",
    "revision": "e9db83a60469f2ce628467789317aed6"
  },
  {
    "url": "assets/js/12.a5329e46.js",
    "revision": "935f0c1dbb7f8da131ae30fd59bd262c"
  },
  {
    "url": "assets/js/13.b37810aa.js",
    "revision": "876fbcf208aeb81ba8be2cf55deccf18"
  },
  {
    "url": "assets/js/14.c4e924d0.js",
    "revision": "a5fa3be4087ea846ea72c874302fffe7"
  },
  {
    "url": "assets/js/15.3f39b9ff.js",
    "revision": "31a8823df62970755bc9e13130efc49a"
  },
  {
    "url": "assets/js/16.3d9624ee.js",
    "revision": "08debb62fd91f0c6b740bd753dec2471"
  },
  {
    "url": "assets/js/17.6362286e.js",
    "revision": "8815da11052ad36d367635e58a8c03e9"
  },
  {
    "url": "assets/js/18.410c3e79.js",
    "revision": "809414cc76ae2454e33d75fde6abfa7c"
  },
  {
    "url": "assets/js/19.982393b5.js",
    "revision": "4bcfadba50584e8d245e8335401afcef"
  },
  {
    "url": "assets/js/2.01a2ceab.js",
    "revision": "9f5d81778f264235ef1ff99e0ed77e85"
  },
  {
    "url": "assets/js/20.15a7b89f.js",
    "revision": "9984799b079bf888a374c2ed7ac5a637"
  },
  {
    "url": "assets/js/21.37be65ea.js",
    "revision": "172a5fec9df5e640812f96b8c370a8b7"
  },
  {
    "url": "assets/js/22.5b709e03.js",
    "revision": "d3c5236c71591c92b180b8005caed891"
  },
  {
    "url": "assets/js/23.a35c8756.js",
    "revision": "d12ca8919cd52a62aed22b8375c07283"
  },
  {
    "url": "assets/js/24.073c6149.js",
    "revision": "3b5689432abf87b5f689a876b67e4967"
  },
  {
    "url": "assets/js/26.2a58e3d0.js",
    "revision": "730466dab27a3b499e639af86a681853"
  },
  {
    "url": "assets/js/3.d5fbfc13.js",
    "revision": "88d4bf6ac14ee755560c8cd0ad79abc1"
  },
  {
    "url": "assets/js/4.3d4ed436.js",
    "revision": "727944e61f1b7e7ac414327498c1be0c"
  },
  {
    "url": "assets/js/5.88dc06d3.js",
    "revision": "5946558363fb920222d6f3b0fa83d985"
  },
  {
    "url": "assets/js/6.80e32d60.js",
    "revision": "b92702f2d637ff84229b43384b8f7332"
  },
  {
    "url": "assets/js/7.45e89273.js",
    "revision": "551fa76df78ffe15a8e30aa95237f044"
  },
  {
    "url": "assets/js/8.3b31f7c3.js",
    "revision": "2d2f62a3531e0c4502d404d9577c62a9"
  },
  {
    "url": "assets/js/9.6eacf766.js",
    "revision": "4ded6a42f572773e8079384dcbba57db"
  },
  {
    "url": "assets/js/app.963453d2.js",
    "revision": "a136b26450af4160cdc6c850719abba4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "dc24e11822e16bf6aabdacf313808ad4"
  },
  {
    "url": "design/index.html",
    "revision": "132f11d93706d22f1f921937b40acd02"
  },
  {
    "url": "index.html",
    "revision": "b37f3ffb7042b9ee79285099135aa34b"
  },
  {
    "url": "intro/index.html",
    "revision": "903bcf9fef9bad95d401a71bf43f786d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d467f8674f02f994a77f8f5aeb6a9eca"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ecfd20d10484a59004272b39cb7f66c3"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6278c5d982005fb1c5ef0e6f6ee33f86"
  },
  {
    "url": "software/index.html",
    "revision": "56093497b6aeec9cb2de9f02667a65e8"
  },
  {
    "url": "test/index.html",
    "revision": "e759512c0ce0fa4289b39ecef1efc7b1"
  },
  {
    "url": "use cases/index.html",
    "revision": "cfe9697bf9e7165430a85d97885236ca"
  }
].concat(self.__precacheManifest || []);
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
