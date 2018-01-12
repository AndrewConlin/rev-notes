### Modules
* Modules are collections of code with distinct functionality. This seperation of concerns makes code easier to maintain and more reusable.
  
* Modules can mimic the behavior of a Java class, allowing you to encapsulate code in a meaningful way.
  
* In JavaScript only functions create a new scope (removing variable declarations from the global scope)
  
### Object Literal Pattern
* We have used the 'Object Literal' module pattern previously:
  
```javascript
var employee = {
	name : 'Jim', // => exposed, but lacking in the setter functionality
	greet : function() {
		return 'Hello ' + this.name;
	}
}

employee.name; // 'Jim'
employee.name = 'Bob';
employee.name; // 'Bob'
employee.greet(); // 'Hello Bob'
```
  
* The weakness of the object literal pattern is that you cannot keep any of your variables private and protected. Even if you added a getter/setter to the code above, you would still be able to access the `name` property directly.
  
* Before learning about a better module pattern, we need to review a few key JavaScript features:


#### 1. How the JS interpreter evaluates code
* JavaScript objects (including primitives) are not evaluated until they are assigned. At the time of assignment JS objects are evaluated, assigned a type and afforded the full functionality of that type. For example:
  
```javascript
/*
	Unevaluated primitives don't have a type, thus, no
	methods are available
*/

9.toString(); // SyntaxError: Unexpected token ILLEGAL

/* 
	Assigning a number object primitive to a variable
	casts it to the 'number' type, allowing it to use 
	the wrapper class 'Number's methods
*/
var x = 9;

x.toString(); // '9'
```
  
* You can force evaluation by wrapping the object in parentheses:
  
```javascript
1.toString(); // SyntaxError
(1).toString(); // '1'

{}.toString(); // SyntaxError
({}).toString(); // '[object Object]'

function(){}.toString(); // SyntaxError
(function(){}).toString(); // 'function (){}'
```
  
#### 2. Immediately Invoked Function Expressions (IIFE)
* JavaScript functions can be defined and immediately invoked. 
  
* In order to be immediately invoked, an anonymous function must force interpreter evaluation using parentheses, and then be invoked with an empty set of parentheses:
  
```javascript
function() {
	return'will not work, has not been evaluated';
}(); // SyntaxError => note the parentheses at the end trying to invoke the function

(function() {
	return 'hello world';
})(); // 'hello world'
```
  
* As soon as the interpreter reaches an IIFE, the IIFE is both evaluated and invoked.
  
* The returned values of IIFEs can be stored within variables:
  
```javascript
var greeting = (function() {
	return 'hello world';
})();

greeting; // 'hello world'
```
  
* Arguments can be passed into IIFEs making them more modular:
  
```javascript
var globalName = 'Samuel L Jackson';

var greeting = (function(name) {
	return 'Hello ' + name;
})(globalName);

greeting; // 'Hello Samuel L Jackson'
```
  
* IIFEs can also access global variables directly:
  
```javascript
var globalFirstName = 'Samuel';
var globalMiddleName = 'L';
var globalLastName = 'Jackson';
var globalTitle = 'Melon Farming'

var greeting = (function(fName, mName, lName) {
	return 'Hello ' + fName + ' ' +
	mName + ' ' + globalTitle + ' ' + lName;
})(globalFirstName, globalMiddleName, globalLastName);

greeting; // 'Hello Samuel L Melon Farming Jackson'
```
  
* In the example above, notice that we are injecting the arguments which the anonymous function will use in the invoking parentheses, these are then being accessed by the parameters within the function declaration.
  
#### 3. Closures
* Closures are objects that combine a function and the environment in which the function was created.
  
* Closures continue to have access to the local variables that existed at the time of their creation:
  
```javascript
var employeeID = 7;

function addX(x) { // define local variable x as a parameter
	return function(y) {
		return x + y; // return a function that uses x, and another parameter y
	}
}

var add1000 = addX(1000);
add1000(employeeID); // 1007
add1000(15); // 1015
```
  
* Here is a more useful example:
  
```javascript
function makeFullPath(env) {
	var BASE_URI;

	if(env === 'production') {
		BASE_URI = 'http://mycoolsite.com/';
	} else {
		BASE_URI = 'http://localhost:3000/';
	}

	return function(path) {
		return BASE_URI + path;
	}
}

var router = makeFullPath('dev');
router('todos'); // 'http://localhost:3000/todos'
router('users?name=Barney'); // 'http://localhost:3000/users?name=Barney'
```
  

#### [2 - Revealing Module Pattern](2_RevealingModulePattern.md)
