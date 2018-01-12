### `module.exports`
* Node provides us with a global object property called `module`
  
* Within `module` is an object, `exports` (i.e. `module.exports`)
  
* We can add properties to `module.exports` from within a file to expose that file's functionality to another file in our application:
  
```javascript
// in a file named 'hello.js'
var hello = function() {
	console.log('Hello world');
};

module.exports = hello; // [Function]
```
  
* In the above example we defined a function expression, then set the value of `module.exports` equal to that function.
  
* Alternatively, we could assign several different properties to the exports object:
  
```javascript
// in a file named 'hello.js'
var node = function() {
	console.log('Hello Node');
};

var world = function() {
	console.log('Hello world');
};

module.exports.world = world;
module.exports.node = node;

module.exports; // { [Function] world: [Function], node: [Function] }
```
  
* Of course, you can also assign these as anonymous functions to `module.exports` properties:
  
```javascript
// in a file named 'hello.js'
module.exports.node = function() {
	console.log('Hello Node');
};

module.exports.world = function() {
	console.log('Hello world');
};

module.exports; // { [Function] world: [Function], node: [Function] }
```
  
* This functionality is nothing new, and isn't particularly useful, until we are able to import this exported functionality into other files.
  


#### Continue to [2 - Module `require`](2_ModuleRequire.md)