### `join`, `slice`, `splice`
* `join(seperator)`
  * Returns a concatatenated string of all of the values in an Array (defaults to commas);
  
```javascript
var arr = [1,true,'hello','mango'];

var joined = arr.join();
joined; // '1,true,hello,mango'

var spaced = arr.join(' ');
spaced; // '1 true hello mango'

var and = arr.join(' and ');
and; // '1 and true and hello and mango'
```
  
* `slice(startIndex, endIndex)`
  * Returns a slice (subarray) of the array from the index specified at the first argument up to (but not including) the number provided at the index specified by the second argument. If no second argument is provided, it will create a subarray from the start index to the end of the array. **NOTE** `splice` is non-destructive, it merely returns a subarray, it does not alter the original.
  
```javascript
var arr = ['zero','one','two','three'];

var sub = arr.slice(2);
sub; // [ 'two', 'three' ]

var sub2 = arr.slice(0,2);
sub2; // [ 'zero', 'one' ] => Note the non-inclusivity

arr; // [ 'zero', 'one', 'two', 'three' ] => Non-destructive
```
  
* `splice(delStartIndex, delEndIndex, itemToInsert, ...)`
  * Destructively deletes, inserts, or both inserts and deletes from an Array, modifying the original array in the process.
  * The first argument specifies the index to begin the deletion/insertion.
  * The second argument indicates how many indices to remove after the starting point (note, providing a `0` will lead to no deletions).
  * All subsequent arguments provided will be inserted into the array at the index specified by the first argument.
  * `splice` returns an array of deleted items.
  
```javascript
var ogArray = ['apple', 'banana', 'coconut'];

ogArray.splice(1); // [ 'banana', 'coconut' ] => returns deleted elements

ogArray; // [ 'apple' ] => destructive update of original

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

var removeTheMiddleArray = ['Reese', 'Malcom', 'Dewey'];

removeTheMiddleArray.splice(1,1); // [ 'Malcom' ]

removeTheMiddleArray; // [ 'Reese', 'Dewey' ]

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// There should be a 4 where it says 'kiwi'
var incorrectArray = [1,2,3,'kiwi',5,6,7];

incorrectArray.splice(3,1,4); // [ 'kiwi' ] => remove 'kiwi'

incorrectArray; // [ 1, 2, 3, 4, 5, 6, 7 ] => 4 has been inserted

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// Add several items
var missingData = ['death', 'taxes'];

missingData.splice(1,0,'bananas','jobs','school','friends'); // [] => nothing deleted

missingData; // [ 'death', 'bananas', 'jobs', 'school', 'friends', 'taxes' ]

```
  

#### Continue to [4 - `reverse`, `sort`](4_ReverseSort.md)