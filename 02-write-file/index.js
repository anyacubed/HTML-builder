const process = require('process');
const fs = require("fs");
const path = require('path');

let pathToFile = path.join('02-write-file', 'hello.txt');
let writeableStream = fs.createWriteStream(pathToFile);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Hello!")

rl.on("line", (answer) => {
  if (answer.toLowerCase() !== "exit") {
    writeableStream.write(`${answer}`);
  } else {
    console.log("Goodbye!");
    rl.close();
    process.exit();
  }
})

process.on('beforeExit', () => {
  console.log("Goodbye!");
});