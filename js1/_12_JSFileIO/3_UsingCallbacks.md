### Using Callbacks with File System
* Nested callbacks can be difficult to understand at first. In order to explore them as well as develop some best practices for dealing with them, let's build a simple application that reads from a file and does *something* with the returned data.
  
#### Step One, Get Something Working

* Start by requiring File System into a variable
  
```javascript
var fs = require('fs');
```
  
* Next, create a file to read from, call this one, 'read_test.txt'. Follow convention and put `Hello World` in 'read_test.txt'
  
```html
// in 'read_test.txt'
Hello World
```
  
* Now, let's use `fs.readFile(file, callback)` to test that everything is working:
  
```javascript
var fs = require('fs');

fs.readFile('read_test.txt', function(err,data) {
	console.log(data);
});
```
  
```bash
> node app.js
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
```
  
* When you run the file you should see a result like the one above. A Buffer with some byte code. You can clean that up and see the actual string value with `data.toString()`
  
```javascript
var fs = require('fs');

fs.readFile('read_test.txt', function(err,data) {
	console.log(data.toString());
});
```
  
```bash
> node app.js
Hello World
```
  
* Lets improve this first example by first checking if the file we are reading from exists...let's also do some error handling.
  
```javascript
var fs = require('fs');

fs.exists('read_test.txt', function(exists) {
	if (exists) {
		fs.readFile('read_test.txt', function(err,data) {
			if (err) {
				throw new Error('READ ERROR');
			}
			console.log(data.toString());
		});
	} else {
		throw new ReferenceError('read_test.txt does not exist');
	}
});
```
  
```bash
> node app.js
Hello World
```
  
#### Step 2, Making our code more dynamic
* At the moment, the `fs.readFile()` is hardcoded, will always execute, and repeats the file location several times. Let's start by creating a variable to store the file location:
  
```javascript
var fs = require('fs');

var FILE = 'read_test.txt';

fs.exists(FILE, function(exists) {
	if (exists) {
		fs.readFile(FILE, function(err,data) {
			if (err) {
				throw new Error('READ ERROR');
			}
			console.log(data.toString());
		});
	} else {
		throw new ReferenceError(FILE + ' does not exist');
	}
});
```
  
* That's a bit better, now we can chang the file reference in just one place.
  
* But what if we wanted to read from two different files? We would have to recreate all of this code with a different variable...OR! We could make a function and pass in the value for `FILE` as an argument:
  
```javascript
var fs = require('fs');

var READ_FILE = 'read_test.txt';
var SOMEOTHER_FILE = 'some_file.txt';

function readFromFile(FILE) {
	fs.exists(FILE, function(exists) {
		if (exists) {
			fs.readFile(FILE, function(err,data) {
				if (err) {
					throw new Error('READ ERROR');
				}
				console.log(data.toString());
			});
		} else {
			throw new ReferenceError(FILE + ' does not exist');
		}
	});
}

readFromFile(READ_FILE);
// readFromFile(SOMEOTHER_FILE);
```
  
* Now we can read from multiple file locations with ease...but, we will always have the same functionality...whatever is read will always print to console in the same way...
  
* To alter the behavior of the function, and have some variety in our callback behavior, we will pass a callback function to the `readFromFile()` function as an argument:
  
```javascript
var fs = require('fs');

var READ_FILE = 'read_test.txt';
var SOMEOTHER_FILE = 'some_file.txt';

function readFromFile(FILE, callback) {
	fs.exists(FILE, function(exists) {
		if (exists) {
			fs.readFile(FILE, function(err,data) {
				if (err) {
					throw new Error('READ ERROR');
				}
				
				// Here we invoke the callback function
				// passing it the data from the `fs.readFile()`
				// callback function
				callback(data);

			});
		} else {
			throw new ReferenceError(FILE + ' does not exist');
		}
	});
}

readFromFile(READ_FILE, function(data) {
	// Print the data, but in all caps
	console.log(data.toString().toUpperCase());
});
// readFromFile(SOMEOTHER_FILE);
```
  
```bash
> node app.js
HELLO WORLD
```
  


#### Continue to [4 - Make it Modular](4_MakeItModular.md)
