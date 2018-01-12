### Determine if an Object is an Array
* JS Array's are objects
  
```javascript
var arr = [];
typeof arr; // 'object'
```
  
* There are multiple ways to determine if an object is an Array, this can be vital if your code requires an actual Array (not just something that can be iterated...like a string).  
  
1: `Array.isArray(arr)` : the Array class static method `isArray(arr)` takes a single argument and returns a boolean:
  
```javascript
var arr = [];
var nonArr = 'hello';

Array.isArray(arr); // true
Array.isArray(nonArr); // false
```
  
2: Compare the constructor properties on the object's prototype.
    
```javascript
var num = 9;
var str = 'hello';
var arr = [];

arr.constructor; // [Function: Array]
arr.constructor.name; // 'Array'
arr.constructor === [].constructor; // true

arr.constructor === str.constructor; // [Function: Array] === [Function: String] => false
arr.constructor === num.constructor; // [Function: Array] === [Function: Number] => false
```
  
3: Use the `instanceof` operator.  
  
```javascript
[] instanceof Array; // true
'string' instanceof Array; // false

var arr = [1,2,3];

arr instanceof Array; // true
```
  
* With the ability to determine if an object is an array in your arsenal, you will dramatically reduce your risk of calling an Array class method on an object of a different type and causing your code to throw an exception.
  

#### Continue to [2 - `push`, `pop`, `shift`, `unshift`](2_PushPopShiiftUnshift.md)