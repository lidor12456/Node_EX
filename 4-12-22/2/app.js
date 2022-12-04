const fs = require("fs");

fs.writeFile("using-fs", "im using fs to write this", () => {});
fs.copyFile("using-fs", "copied_using-fs", () => {});
fs.rename("using-fs", "using-fs-renamed", () => {});

const testFolder = "./";
fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});
