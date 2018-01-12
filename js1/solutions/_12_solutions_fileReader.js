var fs = require('fs');

var fileReader = (function(file, callback) {
	fs.exists(file, function(exists) {
		if (exists) {
			fs.readFile(file,function(err,data){
				callback(data);
			});
		} else {
			throw new Error('File does not exist');
		}
	});
});

module.exports = fileReader;