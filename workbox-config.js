module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,webp,ico,html,js,css,svg}"],
  swDest: "./build/service-worker.js",
  swSrc: "./src/src-sw.js",
  //importScripts: ['./push-sw.js']
};
