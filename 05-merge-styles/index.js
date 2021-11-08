const fs = require('fs');
const path = require('path');
let pathToOriginFolder = path.join('05-merge-styles', 'styles');
let pathToCopyFolder = path.join('05-merge-styles', 'project-dist');
const fsPromises = fs.promises;
let dataArray = [];

fsPromises.readdir(pathToOriginFolder, {withFileTypes: true})
  .then(files => {
    for (let file of files) {
      let fileExtension;
      if (file.isFile() == true) {
        if (path.extname(file.name) == ".css") {
          fileExtension = path.extname(file.name);
          copyFileDataToArray(file);
        } else {
          return "Doesn't match the condition"
        }
      };
    }})
    .then(() => {
      
      console.log(dataArray)
      // let pathToFile = path.join('05-merge-styles', 'project-dist', 'bundle.css');
      // let writeableStream = fs.createWriteStream(pathToFile);
      // writeableStream.write(dataArray);
    })

console.log(dataArray)

function copyFileDataToArray(file) {
  let pathToFile = path.join('05-merge-styles', 'styles', file.name);
  fsPromises.readFile(pathToFile, "utf8")
    .then((data) => {
      dataArray.push(data);
    }
  );
}