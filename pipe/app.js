const fs = require('fs');

// Create a readable stream
const readStream = fs.createReadStream('readme.txt');

// Create a writable stream
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
    console.log('Data transfer complete using pipe!');
});
