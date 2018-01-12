### `reverse`, `sort`
* `reverse()`
  * Destructive method which reverses the order of elements in an existing array.
  
```javascript
var arr = [1,2,3];
arr.reverse();

arr; // [ 3, 2, 1 ]
```
  
* `sort()`
  * The `sort()` methods default behavior is to evaluate a provided array and rearrange the elements destructively into order determined by value.

```javascript
var numArr = [4,5,1,7,19,5,3,7];
numArr.sort();

numArr; // [ 1, 19, 3, 4, 5, 5, 7, 7 ]

var strArr = ['coconut', 'peach', 'banana', 'xylophone', 'apple'];
strArr.sort();

strArr; // [ 'apple', 'banana', 'coconut', 'peach', 'xylophone' ]
```
  
* `sort()`s default behavior has it's shortcomings (as is noticeable in the 'numArr' example above). Luckily, we can provide a sort function as an argument and customize how the sort algorithm works.
  * provide an anonymous (or named) function as an argument (`sort(function(a,b){})`).
  * the arguments ('a', 'b') provided to the anonymous function will represent the elements fo the array being evaluated. If the values are equal, a `0` will be returned, representing equality. Otherwise, the return value will be either `> 0` or `< 0`, illustrating that the value is greater than or less than what it is being evaluated against. The `sort()` function will take this input to order the elements as it evaluates them.
  
```javascript
var stdSort = [4,111,19,16,5,1009,56,78,15];
stdSort.sort();
stdSort; // [ 1009, 111, 15, 16, 19, 4, 5, 56, 78 ]

var customSort = [4,111,19,16,5,1009,56,78,15];
customSort.sort(function(a,b) {
	return a-b;
});
customSort; // [ 4, 5, 15, 16, 19, 56, 78, 111, 1009 ]

//\\//\\ You can reverse the sort order by reversing the evaluation order//\\//\\

var customSort2 = [4,111,19,16,5,1009,56,78,15];
customSort2.sort(function(a,b) {
	return b-a;
});
customSort2; // [ 1009, 111, 78, 56, 19, 16, 15, 5, 4 ]

```
  

#### Continue to [5 - `indexOf`, `lastIndexOf`](5_IndexOfLastIndexOf.md)