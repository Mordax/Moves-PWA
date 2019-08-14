module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,png,ico,html,js,css}"],
  swDest: "./build/service-worker.js",
  swSrc: "./src/src-sw.js",
  //importScripts: ['./push-sw.js']
};
