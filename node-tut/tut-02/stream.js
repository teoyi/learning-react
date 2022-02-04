// instead of reading all large data at once 

const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'files', 'lorem.txt'), {encoding: 'utf8'}); // create a readable stream 

const ws = fs.createWriteStream(path.join(__dirname, 'files', 'new-lorem.txt')); // create  a writable stream 


// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// });

rs.pipe(ws); // -> this will do better than rs.on s