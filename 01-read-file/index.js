const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, 'text.txt');
const readableStream = fs.createReadStream(filePath, 'utf8');
readableStream.pipe(process.stdout);