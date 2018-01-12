var fileReader = require('./_12_solutions_fileReader');

fileReader('_12_order.txt', function(data){
	console.log(data.toString().split(',')[0].toUpperCase());
});