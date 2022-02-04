// You should already know: 
// HTML, CSS, Javascript
// Possibly experience with other libraries and frameworks


// How NodeJS differs from Vanilla JS
// 1) NOde runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window
console.log('Hello World');
// 3) global object instead of window object 
// console.log(global);
// 4) has common core modules that we will explore 
// 5) CommonJS modules instead of ES6 modules 
// 6) Missing some JS APIs like fetch but there are packages available. 

// here are modules used, utilize require to load it 
const os = require('os');
const path = require('path');
const math = require('./math'); // -> custom module in the same file 
// ^ we can also destructure by { add } = require('./math')

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname); // this gives us directory name -> full path 
// console.log(__filename) // this gives the file name  -> full path

// console.log(path.dirname(__filename)); // -> gives the full path 
// console.log(path.basename(__filename)); // -> only gives the name of the file instead of full path
// console.log(path.extname(__filename)); // only give file type 

// console.log(path.parse(__filename)); // this gives everything 

console.log(math.add(2,3));