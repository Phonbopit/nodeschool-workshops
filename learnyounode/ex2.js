// LEARN YOU THE NODE.JS FOR MUCH WIN!
// Ex.2 : BABY STEPS

// Write a program that accepts one or more numbers as command-line arguments 
// and prints the sum of those numbers to the console (stdout).


var inputs = process.argv;

var total = 0;

inputs.forEach(function (data) {
		var result = Number(data);
		if (!isNaN(result))
			total += result;
});

console.log(total);


// Note 
// - `process.argv`, contain a array from command line.
// - All elements of `process.arvs` are strings. 
// - `process.argv[0]` is always 'node'
// - `process-argv[1]` is always the path to program.
// - Use `Number()` to passing a String to Number.