### Classical Inheritance
* Inheritance in JavaScript is 'prototypal'.
  
* JavaScript classes rely on references to the prototype object to determine their inheritance chain.
  
* In order to inherit from a super class, you will need to add that class's prototype to the constructor of the child class.
  
* The example below uses the Node 'inherits' function to accomplish this and allow `User` to inherit from `Person`:

```javascript
// Node's inheritance function on the utils class
function inherits (constructor, superConstructor) { // take a child and parent constructor as arguments
	constructor.super_ = superConstructor; // assign a 'super_' property to constructo which stores the parent classes constructor
	// create a prototype object, pass in the parent classes prototype object, configure the constructor function
	constructor.prototype = Object.create(superConstructor.prototype, {
		constructor: {
			value: constructor,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
};

// Class constructors can also be written as function expressions
var Person = function(name) {
	this.name = (typeof name === 'string') ? name : '';
};

Person.prototype.greet = function() {
		return 'Hello ' + this.name;
	}

var sonia = new Person('Sonia');

var User = function(name, id) {
	User.super_.call(this, name); // Calls super (.call() invokes the super function)
	this.id = (typeof id === 'number') ? id : 0;
};

inherits(User, Person);

var frank = new User('Frank',890);

frank.greet(); 
/* 
	Look in current function (User) for 'greet()' method,
	if none is found, look to the parent object
*/

```
  
* Prototypal inheritance will continue to nest constructor prototypes as more children are added, allowing a class to have a large number of descendants.
  
* To determine if an instance of one class inherits from another class, you can use the `instanceof` expression: 
  
```javascript
function inherits (constructor, superConstructor) { 
	constructor.super_ = superConstructor; 
	constructor.prototype = Object.create(superConstructor.prototype, {
		constructor: {
			value: constructor,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
};

var Student = function() {};
var GraduateStudent = function(){};

inherits(GraduateStudent, Student);

var felicity = new GraduateStudent();
var doug = new Student();

felicity instanceof Student; // true
felicity instanceof GraduateStudent; // true

doug instanceof Student; // true
doug instanceof GraduateStudent; // false

felicity.__proto__; // Student {} => stores the Student constructor in the prototype

felicity.__proto__.__proto__ // Object {} => all objects inherit from Object class, thus it is also in the prototype chain
```


  
  
#### Continue to [3 - Prototypal Inheritance](3_PrototypalInheritance.md)