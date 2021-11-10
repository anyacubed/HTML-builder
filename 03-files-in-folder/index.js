const fs = require("fs");
const path = require('path');
let pathToFolder = path.join('03-files-in-folder', 'secret-folder');

fs.readdir(pathToFolder, (err, files) => {

    if (err) throw err;
    for (let file of files) {

      let fileName;
      let fileSize;
      let fileExtension;

      fileName = file.split('.').slice(0, -1).join('.');
      fileExtension = path.extname(file).slice(1);

      let pathToFile = path.join(pathToFolder, file)

      fs.stat(pathToFile, (err, stats) => {
        if (err) {
          console.log(`File doesn't exist.`);
        } else if (stats.isFile()) {
          fileSize = stats.size;
          console.log(`${fileName}-${fileExtension}-${fileSize}`)
        }
      })
    }
  })