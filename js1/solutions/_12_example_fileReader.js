var fs = require('fs');

module.exports = (function (FILE, callback) {
	fs.exists(FILE, function(exists) {
		if (exists) {
			fs.readFile(FILE, function(err,data) {
				if (err) {
					throw new Error('READ ERROR');
				}
				
				callback(data);

			});
		} else {
			throw new ReferenceError(FILE + ' does not exist');
		}
	});
});