### Creating a Class
* JavaScript classes are defined by a *constructor* function.
  
* By convention the identifier of the function will be the capitalized name of the class, this helps to differentiate this function as a class declaration.
  
* When a constructor function is invoked with the `new` keyword, you will create a new instance of an object of that class.
  
```javascript
function Employee() {}

var emp = new Employee();

emp; // Employee {};
typeof emp; // 'object'
emp instanceof Employee // true
```
  
* You can assign default properties to a class's constructor function to prevent those properties from being undefined at initialization:
  
```javascript
function Employee() {
	this.firstname = '';
	this.lastname = '';
	this.salary = 0;
}

var emp = new Employee();

emp; // Employee { firstname: '', lastname: '', salary: 0 }
emp.lastname // ''
```
  
* You can also add parameters to a class's constructor function and use them to assign values to properties at the time of initialization:
  
```javascript
function Employee(fname,lname,salary) {
	this.firstname = fname;
	this.lastname = lname;
	this.salary = salary;
}

var emp = new Employee('Yulia', 'Blagonya', 67890);

emp; // Employee { firstname: 'Yulia', lastname: 'Blagonya', salary: 67890 }

var emp2 = new Employee();
emp2; // Employee { firstname: undefined, lastname: undefined, salary: undefined }
```
  
* Due to the optionality of arguments in JavaScript, it is possible for these properties to be undefined (as illustrated above). As this behavior can produce `TypeError`s emanating from `undefined` values it can be useful to set defaults for these values. There are a number of ways to accomplish this each with costs and benefits:  

1: Use the `||` operator for assignment

* This is the least verbose method for assigning defaults, but has several flaws...
  1. Lack of clarity: using `||` in this manner is not intuitive
  2. 'Falsey' errors: values that are 'falsey' but legitimate will be disregarded in favor of the default (i.e. `0`, `null`, `''`, `false`)
  
```javascript
function Fruit(name) {
	this.name = name || 'Apple';
}

var newFruit = new Fruit();
newFruit.name; // 'Apple';

var banana = new Fruit('Banana');
banana.name; // 'Banana'

var overwritten = new Fruit(0);
overwritten.name; // 'Apple'

```
  
2: Use conditional `if` statements for assignment

* Significantly more verbose, but precise, you should always keep this option in your arsenal for assigning default values, particularly when you are looking for very specific input. The downside is that it takes a significant amount of code and lines to make it readable...
  
```javascript
function Car(make, model, year) {
	if (make === undefined) {
		this.make = 'Ford';
	} else { 
		this.make = make;
	}

	if (model === undefined) {
		this.model = 'F-150';
	} else { 
		this.model = model;
	}

	if (year === undefined) {
		this.year = 2016;
	} else { 
		this.year = year;
	}
}

var car = new Car();
car; // Car { make: 'Ford', model: 'F-150', year: 2016 }

Car { make: 'Subaru', model: 'Outback', year: 0 }

var myCar = new Car(null, false, 0);
myCar; // Car { make: null, model: false, year: 0 }
```
  
3: Use the ternary operator!

* Not always as human readable as `if` conditionals, but for simple statements, the ternary operator can be a fairly concise means of assigning default values:
  
```javascript
function Student(name, gpa, graduated) {
	this.name = (typeof name == 'string') ? name : '';
	this.gpa = (typeof gpa == 'number') ? gpa : 0.0;
	this.graduated = (typeof graduated == 'boolean') ? graduated : false;
} 

var katie = new Student('Kathleen Jefferson', 3.8, true);
katie; // Student { name: 'Kathleen Jefferson', gpa: 3.8, graduated: true }

var billy = new Student();
billy; //Student { name: '', gpa: 0, graduated: false }

var moriko = new Student(null, 'Moriko', 3.3);
moriko; // Student { name: '', gpa: 0, graduated: false }
```
  
* The above example not only assigns a default value to each of the properties if the argument is `undefined`, it goes one step further and type checks the argument, assigning a default value in the provided type is incorrect.
  
* **NOTE**: `typeof null === 'object'`, if an object is expected a null will be a valid input, further on in your program you may need to check for null.
  

#### Continue to [2 - Class Methods](2_ClassMethods.md)
