### `for...in` Loop
* JavaScript has a special kind of loop which iterates over the properties in an object
  
* JS objects are collections of key value pairs similar to hashes. Each of the key's is referred to as a 'property'
  
* Properties can be accessed in two ways, either with 'dot' notation: 

```javascript
var person = { name : 'Ada Lovelace', age : 42 };

person.name; // 'Ada Lovelace' => dot notation

person.age; // 42

```
  
* ...or bracket notation using a string representation of the property name:
  
```javascript
var person = { name : 'Ada Lovelace', age : 42 };

person['name']; // 'Ada Lovelace' => bracket notation
person['age']; // 42

```
  
* The `for...in` requires an alias to be provided for the property being iterated over ('prop' below), followed by the keyword `in`, followed by the object to be evaluated:

```javascript
var person = { name : 'Ada Lovelace', age : 42 };

for (prop in person) {
	console.log( person[prop] );
}
// Ada Lovelace
// 42
```
  
* **NOTE**: 'dot' notation will not work in the above example as the alias provided for the property ('prop' above), will be a string representation of that property name:
  
```javascript
// Literal translation of the above code in the for...in loop

console.log( person['name']); // => 'Ada Lovelace'
// ...
console.log( person['age']); // => 29

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// Thus, dot notation will not work

console.log( person.'name' ); // => SyntaxError: Unexpected string
```
  
#### Continue to [4 - `throw`, `try`, `catch`, `finally`](4_ThrowTryCatchFinally.md)