var fs = require("fs");
var path = require("./paths");
var fse = require("fs-extra");

path.forEach((e) => {
  var sourceDir = e.source;
  var destDir = `public/${e.destination}`;

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fse.copy(sourceDir, destDir, function (err) {
    if (err) console.error(err);
    else console.log("success!", e.destination);
  });
});
