### Implementing Read Only Constants (ie. `final`)
* JavaScript does have a keyword which when used in place of `var` makes variables 'read-only', `const`:
  
```javascript
const MY_CONST = 'Hello World';

MY_CONST = 'nope';

MY_CONST; // 'Hello World'

```
  
* Inside of an object (or class) you cannot use the `const` keyword to define a read-only constant, instead you have to utilize a static method: `Object.defineProperty()`, which will allow you to set various configuration options on your object.
  
```javascript
function Book(isbn) {
	// Do some type checking
	isbn = (typeof isbn === 'string') ? isbn : '';

	// Configure the 'ISBN' property
	Object.defineProperty(this, 'ISBN', {
		value : isbn,
		writable : false,
		enumerable : true
	});
}

var b = new Book('1283-BADL-UI78'); // undefined
b.ISBN; // '1283-BADL-UI78'
b.ISBN; = 'nope'
b.ISBN; // '1283-BADL-UI78'
```
  

#### Continue to [5 - Labs](5_Labs.md)
