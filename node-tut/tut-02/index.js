// const fs = require('fs'); // node file system module 
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => { // to tackle callback hell 
    try { 
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt')); // -> unlink is delete
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you.');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);
        
    } catch (err) {
        console.error(err);
    };
};

fileOps();

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => { // focus on how path is used so that forward slashes will not cause an issue on different os 
//     if (err) throw err; 
//     console.log(data);// -> buffer data <Buffer 48 69 2c 20 6d 79 20 6e 61 6d 65 20 69 73 20 44 61 76 65 2e> if utf 8 is not declared 
//     // to read 
//     // console.log(data.toString());
// });

// console.log('Hello...'); // -> this is to show that processes are async so this console.log will continue to work 

//notice that it becomes call back hell 
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => { 
//     if (err) throw err; 
//     console.log('Write complete');
//     // if we want to update on write we need to put append here 
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is.', (err) => { // update a file
//         if (err) throw err; 
//         console.log('Append complete');
//         // same logic applies here if we want an action to occur after this 
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'new_reply.txt'), (err) => { // update a file
//             if (err) throw err; 
//             console.log('Rename complete');
//         });
//     });
// });

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing text', (err) => { // update a file
//     if (err) throw err; 
//     console.log('Append complete');
// });

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});