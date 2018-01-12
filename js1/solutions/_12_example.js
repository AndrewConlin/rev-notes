var readFromFile = require('./_12_example_fileReader');

var READ_FILE = 'read_test.txt';

readFromFile(READ_FILE, function(data) {
	console.log(data.toString().toUpperCase());
});