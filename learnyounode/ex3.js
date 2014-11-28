// LEARN YOU THE NODE.JS FOR MUCH WIN!
// Ex.3 : MY FIRST I/O!

// Write a program that uses a single synchronous filesystem operation to read 
// a file and print the number of newlines it contains to the console (stdout), 
// similar to running cat file | wc -l. The full path to the file to read will 
// be provided as the first command-line argument.


var fs = require('fs');

var content = fs.readFileSync(process.argv[2], 'utf-8');
var lines = content.split('\n').length - 1;

console.log(lines);


// Note
// - `require('fs')` : Require a fs module from a Node core library. like a import in java or #include<> in c++. 
// - `fs.readFileSync('path/to/file')` : Read a file and return Buffer object.
// - `fs.readFileSync('path/to/file', 'utf-8') : Read a file and return a string.
// - `buffer.toString()` : Convert buffer to string.
