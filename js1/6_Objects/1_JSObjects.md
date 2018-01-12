### JavaScript Object
* JavaScript's object datatype is a collection of key-value pairs. This collection is very similar to a hash or dictionary in other languages.
  
* An object's keys are known as 'properties'. The values associated to these keys can be of ANY type.
  
```javascript
var x = {}; // A new empty object

var person = { 
  firstname : 'Andrew', 
  lastname : 'Conlin', 
  age : 25,
  movies : ['Full Metal Jacket', 'Fifth Element'],
  employer : {
    name : 'Skill Distillery',
    type : 'School'
  }
};
// A new object with several properties

```
  
* Object properties can also store functions, when stored within in an object, we refer to these functions as 'methods':
  
```javascript
var car = {
  name : 'Outback',
  brand : 'Subaru',
  color : 'red',
  year : 2009,
  speed : 0,
  drive : function() {
    console.log('Vroom vroom');
  },
  checkSpeed : function() {
    console.log(this.speed);
  },
  accelerate : function() {
    this.speed = this.speed + 10;
  },
  stop : function () {
    this.speed = 0;
  }
}

car.drive(); // Vroom vroom

car.accelerate();
car.accelerate();
car.accelerate();

car.checkSpeed(); // 30

car.stop();

car.checkSpeed(); // 0

```
  
* The above example shows how you can create methods within an object literal. Once stored in properties, we can access these functions with 'dot' notation, just like any other value, and invoke them with parentheses.
  
* **NOTE**: inside of an object the `this` keyword will reference the object, not the global scope. Using `this` you can access the other property values of the object (allowing you to both read an write to them).
  
* Our previous examples have all created objects using *object literal* declarations (i.e. `{}`) and assigned them properties at initialization. Similar to the way that we have accessed the values of object properties with 'dot' notation, we can also assign values to properties in this manner:
  
```javascript
var obj = {};

obj.address = '900 Wall Street';
obj.capacity = 89;
obj.keywords = ['awesome', 'excited', 'zeitgeist'];
obj.describeSelf = function() {
  for (p in this) {
    console.log(this[p]);
  }
}

obj.describeSelf();
// 900 Wall Street
// 89
// [ 'awesome', 'excited', 'zeitgeist' ]
// [Function]
```
  
* It is also possible to create a new instance of an object with the `new` keyword, followed by an invocation of the object's constructor function:
  
```javascript
var obj = new Object(); // => invoke the Object constructor function

console.log(obj); // => {}
```
  
#### `delete` operator
* You can delete a property from an object (similar to removing a key/value from a Hash) with the `delete` operator.
  
* The `delete` operator is an expression that is followed by a property to delete:
  
```javascript
delete object.property
delete object['property']
```
  

#### Continue to [2 - Global Object](2_GlobalObject.md)