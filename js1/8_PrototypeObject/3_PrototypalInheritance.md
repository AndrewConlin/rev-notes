### Prototypal inheritance
* As we saw previously classical inheritance must be implemented with a non-native function in JavaScript...this is because JS inheritance is not truly classical, and is, as we've already seen, prototypal.
  
* Instead of using the relatively verbose classical inheritance scheme which relies on a non-native function, we can assign a super-classes prototype directly to the subclass and inherit it's functionality that way.
  
```javascript
var Vehicle = function (name,wheels,mpg) {
	this.name = (typeof name === 'string') ? name : '';
	this.wheels = (typeof wheels === 'number') ? wheels : 0;
	this.mpg = (typeof mpg === 'number') ? mpg : 0;
};

Vehicle.prototype.display = function() {
	console.log("Name: " + this.name);
	console.log("Wheels: " + this.wheels);
	console.log("mpg: " + this.mpg);
};

var Car = function(name,wheels,mpg,model){
	Vehicle.call(this,name,wheels,mpg);
	this.model = (typeof model === 'string') ? model : '';
};

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.constructor = Car;

var car = new Car('bmw', 4, 23.7, '328i');

car.display();
```
  
#### `Object.create(prototype, propertiesObj)`
* `Object.create()` creates a new object with the specified prototype object and properties (the properties are optional)
  
* By assigning a reference to the newly created super-object in the prototype of the sub-class you will form an inheritance chain and the sub-class will have access to the super-class's prototype (including methods and properties)
  
![Proto Inheritance chain](../imgs/proto_inherit.png)

#### `Object.call(this, args...)`
* `call()` calls a function with a `this` value (specified) and some number of arguments.
  
* In prototypal inheritance, `call()` is used to invoke the super constructor to a class, allowing you to chain constructors together.
  
* You can think of this as being akin to calling `super()` in Java.

#### `Object.prototype.constructor`
* `Object.prototype.constructor` returns a reference to the Object function that created the instance's prototype.
  
* In the above example we explicitly reset the constructor of the sub-class to be the `Car` constructor function. This is done to ensure that invoking `new Car()` will not call the `Vehicle` parent constructor.
  
#### Continue to [4 - Labs](4_Labs.md)
