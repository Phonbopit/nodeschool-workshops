var inputs = process.argv;

var total = 0;

inputs.forEach(function (data) {
		var result = Number(data);
		if (!isNaN(result))
			total += result;
});

console.log(total);