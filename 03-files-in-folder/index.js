const fs = require("fs");
const path = require('path');
let pathToFolder = path.join('03-files-in-folder', 'secret-folder');

fs.promises.readdir("03-files-in-folder/secret-folder", {withFileTypes: true})
  .then(files => {
    for (let file of files) {
      let fileName;
      let fileSize;
      let fileExtension;

      if (file.isFile() == true) {
        fileName = file.name.split('.').slice(0, -1).join('.');
        fileExtension = path.extname(file.name).slice(1);
      } else {
        continue;
      }

      let pathToFile = path.join(pathToFolder, file.name)

      fs.promises.stat(pathToFile, (err, stats) => {
        if (err) {
          console.log(`File doesn't exist.`);
        } else {
          fileSize = stats.size;
        }
      })
      .then(() => 
      console.log(`${fileName}-${fileExtension}-${fileSize}`))

    }
  })
  
  .catch(err => {
      console.log(err)
  })


