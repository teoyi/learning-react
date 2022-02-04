const fs = require('fs');
const path = require('path');

// check if file exists before deleting or creating to prevent loss of data 
if(!fs.existsSync(path.join(__dirname, 'new'))) {
    fs.mkdir(path.join(__dirname,'new'), (err) => {
        if (err) throw err; 
        console.log('Directory created');
    });
};

// delete 

if(fs.existsSync(path.join(__dirname, 'new'))) {
    fs.rmdir(path.join(__dirname,'new'), (err) => {
        if (err) throw err; 
        console.log('Directory removed');
    });
};



// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});