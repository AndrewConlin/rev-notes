### `push`, `pop`, `shift`, `unshift`
* All of these methods are responsible for either adding a item to an existing array, or removing and item from an existing array.
  
* `push(value)`
  * Add an item to the end of an Array and return the resulting length of the Array
  
```javascript
var arr = [1,2,3];
arr.push('kiwi'); // 4

arr; // [1,2,3,'kiwi']
```
  
* `pop()`
  * Remove and return the last item in an Array
  
```javascript
var arr = [1,2,3,4];
arr.pop(); // 4

arr; // [1,2,3]
```
  
* `shift()`
  * Remove the first item in an Array
  
```javascript
var arr = [1,2,3,4];
arr.shift(); // 1

arr; // [2,3,4]
```
  
* `unshift(value)`
  * Addan item to the beginning of an Array and return the resulting length of the Array
  
```javascript
var arr = [1,2,3,4];
arr.unshift('kiwi'); // 5

arr; // ['kiwi',1,2,3,4]
```
  

#### Continue to [3 - `join`, `slice`, `splice`](3_JoinSliceSplice.md)