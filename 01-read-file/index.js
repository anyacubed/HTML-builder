const fs = require('fs');
const path = require('path');
let pathToFile = path.join('01-read-file', 'text.txt');
let readStream = fs.createReadStream(pathToFile);

setTimeout(() => readStream.on('data', (data) =>
      console.log(data.toString())
    ),3000
) 