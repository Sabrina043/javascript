// console.log(process.argv)

// var args = process.argv.slice(2);

// console.log('argument :', args);

// console.log(parseInt(process.argv[2]) + parseInt (process.argv[2]));

var lodash = require("lodash"); // import du module lodash

var output = lodash.without([1, 2, 3], 1);
console.log(output);



