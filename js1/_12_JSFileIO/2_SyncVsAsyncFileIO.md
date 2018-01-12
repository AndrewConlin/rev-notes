### Synchronous vs Asynchronous File IO
##### Synchronous
* Synchronous function calls behave predictably. When the function returns, whatever value was accessed or computed will be available and returned with it. This allows that value to be stored into a variable and we can be confident that the variables value will not be `undefined`
  
* The following synchronous file IO illustrates this behavior. We use the `readFileSync(pathToFile)` method on the File System module to return the contents of 'hello_world.txt' and store it in a variable named data. (**NOTE**: `readFileSync()` is the synchronous implementation of `readFile()`):

```javascript
var fs = require('fs');

// synchronous
var data;

data = fs.readFileSync('examples/12/hello_world.txt');

data; // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
data.toString(); // 'Hello World!'
```
  
* The initial returned value was a Buffer object of byte code, simply running `.toString()` on it converted it to a human readable string.
  
* While this is synchronous implementation is easily grasped and functions as expected, it will have dramatic performance problems as it will block the call stack until the read is complete. For a small file with no additional manipulation this might not be a problem, but if our file was thousands or millions of lines long, it would be noticeably slow, preventing anything else from happening while the file was being read.

##### Asynchronous
* This example illustrates an asynchronous implemenation of readFile, that produces the same result:
  
```javascript
var fs = require('fs');

// asynchronous
fs.readFile('examples/12/hello_world.txt',
	function(err,data){ /* callback function */
		if (err) {
			return console.error(err);
		}
		console.log(data.toString()); // 'Hello World!'
});
```
  
* There are several notable differences that require further explanation.
  * The asynchronous `readFile(pathToFile,callback)` function takes two arguments, the first is the path to the file, the second is a callback function.
  * The callback function has two parameters:
    * `err` will be an error object if an error occurs. If there is no error, error will have the value of `null`. As `null` is a 'falsey' value, the callback will not execute the code within the conditional.
    * `data` will be the value of the file (as a Buffer object).
  * When the callback is returned to the task queue from the Node API, it will have a value assigned to the `data` parameter. Thus, when the Event Loop adds it to the call stack and invokes the `console.log(data.toString())` the value `'Hello World!' will print.
  
* **NOTE**: `data` will only be available within the callback! It is unclear when the callback function will finish its operation with the Node API and be returned to the task queue and you can not rely on it to return in time to populate a variable outside of the callback. Here is an example illustrating this:
  
```javascript
// main.js
var fs = require('fs');

var text;

fs.readFile('examples/12/hello_world.txt',
	function(err,data){ /* callback function */
		if (err) {
			return console.error(err);
		}
		console.log(data.toString() + ' has been read.'); // 'Hello World! has been read.'
		text = data.toString();
		console.log('End of callback')

	}
);

console.log('End of fs.readFile()')

console.log('text = ' + text);
```
```bash
# Result
End of fs.readFile()
text = undefined
Hello World! has been read.
End of callback
```
  
* As you can see the interpreter evaluates the entire 'main.js' file before the callback function returns from the api and is placed on the call stack. As a result, the variable `text` is not assigned a value before it is reached.
  
* The key takeaway is this: a value returned to an asynchronous operation's callback function will only be available within that callback function and cannot be relied upon outside of the callback.
  


#### Continue to [3 - Using Callbacks](3_UsingCallbacks.md)