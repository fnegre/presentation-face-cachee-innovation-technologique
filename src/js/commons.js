module.exports = {
  convertAdocToHtml: (input, output) => {
    console.log("Generation html", input, output);
    var asciidoctor = require("asciidoctor.js")();
    var asciidoctorRevealjs = require("asciidoctor-reveal.js");
    var attributes = {
      revealjsdir: "node_modules/reveal.js@"
      //, revealjs_history: true
      //, revealjs_showNotes: true
      //,'revealjs_slideNumber': true
    };
    var options = { safe: "server", backend: "revealjs", mkdirs: true, to_file: output, attributes: attributes };
    asciidoctor.convertFile(input, options);
  }
};
