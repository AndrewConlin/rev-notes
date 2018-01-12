### What is a Prototype?
* JavaScript objects (including functions) contain a 'prototype' object.
  
```javascript
var Person = function() {};

// function prototype
Person.prototype = {}; // Created by default with constructor declaration
```
  
* When a constructor is used to create a new instance of a JavaScript class, all of the properties from the constructors prototype are made available to that instance.
  
```javascript
function Person(fname, lname) {
	this.fname = fname;
	this.lname = lname;
}

// Assign a new method to the Person prototype
Person.prototype.getFullName = function() {
	return this.fname + ' ' + this.lname;
}

var monica = new Person('Monica', 'Qin');
monica.getFullName(); // 'Monica Qin'
```
  
* You can access the protoype property on an object with `__proto__`:
  
```javascript
// ... above code omitted for brevity

monica.__proto__; // Person { getFullName: [Function] }

/* 
	'Person' is the constructor function.
	'getFullName' is a function we have assigned as a property to the prototype
*/

```
  

#### Continue to [2 - Classical Inheritance](2_ClassicalInheritance.md)