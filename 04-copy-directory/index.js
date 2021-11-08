const fs = require('fs');
const path = require('path');
let pathToCopyFolder = path.join('04-copy-directory', 'files-copy');
let pathToOriginFolder = path.join('04-copy-directory', 'files');
const fsPromises = fs.promises;

fsPromises.mkdir(pathToCopyFolder)
  .then(() => console.log('Directory created'))
  .then(() => copyFolder())
  .catch(() => {
    console.log("Directory already exists! Creating new directory...");
    fsPromises.rmdir(pathToCopyFolder, {recursive: true})
      .then(() => fsPromises.mkdir(pathToCopyFolder))
      .then(() => copyFolder());
})

 function copy(file) {
  let pathToOriginFile = path.join(pathToOriginFolder, file.name)
  let pathToCopyFile = path.join(pathToCopyFolder, file.name);
  fs.copyFile(pathToOriginFile, pathToCopyFile, (err) => {
  if (err) {
    console.log(err);
  } 
  })
}

function copyFolder() {
  fsPromises.readdir(pathToOriginFolder, {withFileTypes: true})
  .then(files => {
    for (let file of files) {
      if (file.isFile() == true) {
        copy(file);
      };
    }
  })
  .then(x => {
    console.log("All files copied!")
  });
}