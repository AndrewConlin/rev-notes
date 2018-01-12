### `throw`, `try`, `catch` & `finally`
* The syntax for `try`/`catch` blocks in JavaScript is very similar to Java's, however, as nothing in JavaScript is typed you are limited to a single catch block (how would JS know to catch one exception vs another?):
  
```javascript
try {
	var person;
	console.log(person.name); // person is undefined, has no properties
} catch (e) {
	console.log('In catch block');
	console.log(e)
} finally {
	// ... do something
}

// In catch block
// [TypeError: Cannot read property 'name' of undefined]

```
  
* To handle multiple types of errors differently, you will need to use a nested conditional in the catch block to identify the error that was thrown and create logic to deal with it specifically:
  
```javascript
try {
	var person;
	console.log(person.name); // Will throw TypeError
	throw new Error('StupidError');
} catch (e) {
	if (e.name === 'TypeError') {
		console.log(e.message);
	} else if (e.name === 'StupidError') {
		console.log('Some other stupid error');
	} else {
		// ... something else
	}
} finally {
	console.log('FINALLY!!!');
}

// Cannot read property 'name' of undefined
// FINALLY!!!
```
  
* `Error` objects (including subclasses of Error) have two properties:
  1. `name` : the name of the error
  2. `message` : the message associated with the error

* The example above also illustrates that you can use the `throw` keyword to create you own `Error`s using the `Error` class constructor. The `Error` takes a single argument to it's constructor, the message of the error, which is assigned to the `message` property.
  
  * In addition to the generic `Error`, there are six core errors in the JS language:
    1. `EvalError` : thrown in reference to the global `eval()` function
    2. `InternalError` : thrown when the JS engine runs into a problem (like a stack overflow)
    3. `RangeError` : thrown when a numeric variable is outside of the valid range
    4. `ReferenceError` : most often seen when attempting to reference a variable or function that does not exist
    5. `SyntaxError` : thrown when statements are evaluated in an order that the interpreter cannot make conform to language syntax
    6. `TypeError` : thrown when trying to perform an operation on an object of the incorrect type (i.e. access a property of an undefined primitive)
  * Each of these errors has it's own constructor and you can create and throw new instances of them:
  
```javascript
try {
	throw new ReferenceError('Resource does not exist');
} catch (e) {
	e.message; // => 'Resource does not exist'
}
```
  
* You are not limited to 'throwing' errors. You can also throw string and numbers. If you want to reference numeric error/success codes, you could throw a number instead of an error:
  
```javascript
try {
	var undefinedVariable;
	if (undefinedVariable) {
		// Do something productive
	} else {
		throw 511;
	}
} catch (e) {
	console.log(e); // 511
}

```
  
  
#### Continue to [5 - Labs](5_Labs.md)