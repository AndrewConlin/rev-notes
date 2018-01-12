### Static Fields and Methods
* A `static` keyword was introduced in JavaScript with ECMA6, but it has not been completely adopted and you will have compatability issues if trying to use it.
  
* To implement static behavior to JavaScript functions you can add the properties to the constructor object:
  
```javascript
function Employee(fname, lname) {
	// Check if Employee.count is defined, if it is add one, else make it 1
	Employee.count = Employee.count ? (Employee.count + 1) : 1;

	this.employeeID = 1000 + Employee.count;
	this.fname = (typeof fname === 'string') ? fname : '';
	this.lname = (typeof lname === 'string') ? lname : '';

	Employee.showCount = function() {
		return Employee.count;
	};
}

var hans = new Employee('Hans', 'Gruber');

hans.fname; // 'Hans'
hans.lname; // 'Gruber'

hans.count; // undefined => not a property of the instance
hans.showCount(); // TypeError: not a function => the instance of hans does not have access to the showCount() function

Employee.fname; // undefined => Employee does not have values associated with the instance properties
Employee.lname; // undefined

Employee.count; // 1
Employee.showCount(); // 1

```
  
* To clarify how this static behavior is being implemented, you need to remember that functions are a type of object. As objects, functions can be assigned properties, these properties can be assigned values...this is all that we are doing when we assign static fields and methods to JavaScript functions.
  


#### Continue to [4 - Implementing Read Only Constants](4_ImplementingReadOnlyConstants.md)
