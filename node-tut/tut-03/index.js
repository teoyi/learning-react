

// useful 
// npm i nodemon -> this will auto look for index js by calling  nodemon on terminal 

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid());

console.log();