### `indexOf`, `lastIndexOf`
* `indexOf(value)`
  * Returns the first index of the object being sought, or `-1` if it does not exist in the array. Searches from beginning to end of the array.
  
```javascript
var obj = {name : 'test'};
var arr = [1,2,3,'kiwi', obj];

arr.indexOf(3); // 2
arr.indexOf('kiwi'); // 3
arr.indexOf(obj); // 4

arr.indexOf('not found'); // -1
```
  
* `lastIndexOf(value)`
  * Returns the last index of the object being sought, or `-1` if it does not exist in the array. Searches from the end to the beginning of the array.

```javascript
var arr = [1,2,3,4,3,2,1];

arr.lastIndexOf(1); // 6
arr.lastIndexOf(2); // 5
arr.lastIndexOf(3); // 4
arr.lastIndexOf('not found'); // -1
```
  

#### Continue to [6 - `forEach`, `map`, `filter`, `reduce`](6_ForEachMapFilterReduce.md)