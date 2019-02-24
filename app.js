// app to convert csv to json
const fs = require('fs');
const readline = require('readline');

const inputFile = process.argv[2];
const delimiter = process.argv[3] || ',';
const outputFile = process.argv[4];
const inStream = fs.createReadStream(inputFile);
const outStream = fs.createWriteStream('./output/' + outputFile + '.json');

const streamInterface = readline.createInterface({
  input: inStream,
  terminal: false
});

let lineNumber = 0;
let dataModel = [];

outStream.write('[\n');

streamInterface.on('line', (line) => {
  if(lineNumber === 0) {
    dataModel = line.split(delimiter);
    lineNumber += 1;
  } else {
    const lineData = line.split(delimiter);
    const lineJson = {};

    for(i = 0; i < dataModel.length; i++) {
      lineJson[dataModel[i]] = lineData[i];
    }
    outStream.write(JSON.stringify(lineJson, null, 2) + ',\n');
  }
});

streamInterface.on('close', () => outStream.write(']'));
