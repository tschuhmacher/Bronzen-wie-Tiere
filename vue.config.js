module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  outputDir: "mk-pwa",
  pwa: {
    name: "Bronzen wie Tiere",
    themeColor: "#1900c6",
    msTileColor: "#1900c6",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "default",

    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp(".*(?:googleapis).com.*$"),
          handler: "cacheFirst"
        }
      ]
    }
  }
};
