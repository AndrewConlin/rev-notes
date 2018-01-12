### `forEach`, `map`, `filter`, `reduce`
* `forEach(func(value, index, array))`
  * `forEach()` will iterate over each element of an array and apply a provided function to each element as it iterates. The function will be passed three arguments:
    1. `value`: this will be the value at the current index of the array.
    2. `index`: will be the numerical index fo the current element.
    3. `array`: the array currently being iterated over (the entire array)
  * The `forEach()` method is non-destructive, but you can alter values during iteration by using the arguments passed to your function.
  
```javascript
var nums = [1,2,3,4,5];

// iterate over an array, log the square of each value
nums.forEach(function(value, index, array){
	console.log(value * value);
});

// results:
1
4
9
16
25

nums; // [ 1, 2, 3, 4, 5 ] => non-destructive

// iterate over an array, square the value in each position
nums.forEach(function(value, index, array){
	array[index] = value * value;
});

nums; // [ 1, 4, 9, 16, 25 ] => updated values
```
  
* `map(func(x))`
  * Similar to `forEach()`, `map()` iterates over an array taking an anonymous function as an argument which will perform an operation on each element of the array. Unlike `forEach()`, `map()` is destructive and will update the values. Additionally, map is only passed the values of the indices, and is not provided the full array or index positions.

```javascript
var nums = [1,2,3,4,5];

nums.map(function(x) {
	return x * x;
}); // [ 1, 4, 9, 16, 25 ]
```
  
* `filter(func(x,i))`
  * `filter()` returns a subset of an array based on a function you provide. This function should be a predicate (returning `true` or `false`) which the `filter()` will use to build the collection to return. Your function will be passed two values, the first, is the value of the current element, the other is the current index;
  
```javascript
var nums = [1,2,3,4,5];

// filter only the even values
nums.filter(function(x) {
	return x % 2 === 0;
}); // [ 2, 4 ]

// filter only even indices
nums.filter(function(x,i) {
	return i % 2 === 0;
}); // [ 1, 3, 5 ]

var names = [
				{ fname : 'Dario', lname : 'Argento' },
				{ fname : 'George', lname : 'Romero' },
				{ fname : 'Sam', lname : 'Raimi' },
				{ fname : 'Eli', lname : 'Roth' },
				{ fname : 'George', lname : 'Lucas' }
			];

names.filter(function(x,i) {
	return x.fname === 'George';
}); 
/* 
[ { fname: 'George', lname: 'Romero' },
  { fname: 'George', lname: 'Lucas' } ]
*/
```
  
* `reduce(func(x,y))`
  * `reduce()` is used to combine all of the values within an array into a single value. The reduction function can take as many as two arguments. The function is provided two values, which you will perform the combination operation on. In the examples below, `x` can be thought of as the initial value and subsequently the running total, while `y` is the value to evaluate it against.
  
```javascript
var nums = [1,2,3,4,5];

nums.reduce(function(x,y) {
	return x + y;
}); // 15

nums.reduce(function(x,y) {
	return x * y;
}); // 120

var mixNums = [1,5,2,9,54,23];

// Return the largest number in the array
mixNums.reduce(function(x,y) {
	return (x > y) ? x : y;
})

var values = [1,5,'kiwi', 'geoff',true];

// Sum all of the strictly number values in an array
values.reduce(function(x,y){
	x = (typeof x === 'number') ? x : 0;
	y = (typeof y === 'number') ? y : 0;
	return x + y;
}); // 6

```
  

#### Continue to [7 - Labs](7_Labs.md)