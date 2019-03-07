const browserSync = require("browser-sync").create();
const commons = require("./commons.js")
const input = "src/doc/index.adoc"
const output = "src/doc/generated/index.html"

browserSync.watch(input).on("change", function() {
  console.log("reloadHtml");
  commons.convertAdocToHtml(input, output)
  browserSync.reload()
});

browserSync.init({
  port: 8000,
  server: {
    // nécessaire
  },
  browser: ["chrome", "firefox"],
  index: output
});

commons.convertAdocToHtml(input, output)