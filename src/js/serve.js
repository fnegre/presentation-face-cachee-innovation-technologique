const browserSync = require("browser-sync").create();
const commons = require("./commons.js")

browserSync.watch("*.adoc").on("change", function() {
  console.log("reloadHtml");
  commons.convertAdocToHtml()
  browserSync.reload()
});

browserSync.init({
  port: 8000,
  server: {
    // nécessaire
  },
  browser: ["chrome"],
  index: "src/doc/generated/index.html"
});

commons.convertAdocToHtml("src/doc/index.adoc", "src/doc/generated/index.html")