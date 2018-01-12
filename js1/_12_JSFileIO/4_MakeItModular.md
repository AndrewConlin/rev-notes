### 4 - Make It Modular
* Modularizing encapsulated functionality dramatically reduces the clutter throughout your application and makes code both better organized and easier to read.
  
* In the previous chapter we built a function (below) to read from a file, now let's make it a module:
  
```javascript
var fs = require('fs');

var READ_FILE = 'read_test.txt';

function readFromFile(FILE, callback) {
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
}

readFromFile(READ_FILE, function(data) {
	console.log(data.toString().toUpperCase());
});
```
  
* Without breaking anything, let's convert this named function into a module:
  
```javascript
var fs = require('fs');

var READ_FILE = 'read_test.txt';

var readFromFile = (function (FILE, callback) {
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

readFromFile(READ_FILE, function(data) {
	console.log(data.toString().toUpperCase());
});
```
  
```bash
> node app.js
HELLO WORLD
```
  
* Nothing broke! Granted there isn't much to break, we aren't returning anything from this function at the moment, but it's nice to have it encapsulated.
  
* Now, let's extract this bulky functionality from the `app.js` file, and place it in a new file `fileReader.js` (don't forget to export the module and require the `fs` dependency!)
  
```javascript
// fileReader.js
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
```
  
* With the file reader removed, we will have to require the module in `app.js` to use it's functionality (but we won't need to import `fs` anymore:
  
```javascript
// app.js
var readFromFile = require('./fileReader');

var READ_FILE = 'read_test.txt';

readFromFile(READ_FILE, function(data) {
	console.log(data.toString().toUpperCase());
});
```
  
* That's much less verbose!
  


#### Continue to [5 - Labs](5_Labs.md)