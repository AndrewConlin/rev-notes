### Revealing Module Pattern
* The 'Revealing Module' pattern improves upon the object literal pattern by using closures to keep all of our properties private, except for the ones we choose to expose by returning an anonymous object.

```javascript
var person = (function(){ // IIFE

	var name = 'Jenny'; // private variable (only exists within the scope of this function, i.e. closure)

	function greet() {
		return 'Hello ' + name;
	}

	return { // return an object
		greet : greet 
	}
})();

person.greet(); // 'Hello Jenny'

person.name = 'Forest'; 
// => assigns a property to the person variable
// => this does not affect the local variable name in the function 'greet'

person.greet(); // 'Hello Jenny'
```
  
* Now that our property is protected within the closure, the only way to change it will be with an exposed setter method:
  
```javascript
var person = (function(){ // IIFE

	var name = 'Jenny'; // private variable (only exists within the scope of this function, i.e. closure)

	function getName() {
		return name;
	}

	function setName(newName) {
		name = newName;
	}

	return { // return an object
		getName : getName,
		setName : setName
	}
})();

person.getName(); // 'Jenny'
person.setName('George');
person.getName(); // 'George'
```
  
* It is possible to pass arguments to the module just like you can with an IIFE
  
```javascript
var helen = (function(name, age){
	var name = (typeof name === 'string') ? name : '';
	var age = (typeof age === 'number') ? age : 0;

	function getAge(){
		return age;
	}

	function setAge(newAge) {
		age = newAge;
	}

	function getName() {
		return name;
	}

	function setName(newName) {
		name = newName;
	}

	return {
		getAge : getAge,
		setAge : setAge,
		getName : getName,
		setName : setName
	}
})('Helen', 38);

helen.getAge(); // 38
helen.getName(); // 'Helen'
```
  
* To make the pattern even more versatile, don't invoke it right away, simply store the module in a variable and invoke it when you want to create a new instance:
  
```javascript
var person = (function(name, age){
	var name = (typeof name === 'string') ? name : '';
	var age = (typeof age === 'number') ? age : 0;

	function getAge(){
		return age;
	}

	function setAge(newAge) {
		age = newAge;
	}

	function getName() {
		return name;
	}

	function setName(newName) {
		name = newName;
	}

	return {
		getAge : getAge,
		setAge : setAge,
		getName : getName,
		setName : setName
	}
}); // note the lack of invocation


var jack = person('Jack', 38);
jack.getAge(); // 38
jack.getName(); // 'Jack'

```

#### Continue to [3 - Labs](3_Labs.md)