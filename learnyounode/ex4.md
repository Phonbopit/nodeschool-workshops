Ex.4 : MY FIRST ASYNC I/O!
---

Write a program that uses a single asynchronous filesystem operation to 
read a file and print the number of newlines it contains to the console (stdout), 
similar to running cat file | wc -l.
The full path to the file to read will be provided as the first command-line argument.

```js
var fs = require('fs');

var callback = function(err, data) {
	var lines = data.split('\n').length - 1;
	console.log(lines);
};

fs.readFile(process.argv[2], 'utf-8', callback);
```

## Note

- `fs.readFile()` : return the value from a callback function that pass as the second argument.
- `function callback(err, data){}` : A Simple Node.js callback.
- Able to se callback as anonymous inner function like :

  ```js
  fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  	// rest of the conde.
  });
  ```