### `clearInterval(ID)`, `clearTimeout(ID)`
* Clear the delays/intervals set by `setTimeout()` and `setInterval()`
  
```javascript
var timeoutID;

timeoutID = setTimeout(function(){
	console.log('Hello World');
}, 2000);

clearTimeout(timeoutID);

var intervalID;

intervalID = setInterval(function(){
	console.log('Hello World');
}, 2000);

clearInterval(intervalID);
```
  
* Invalid ID's passed to the clear methods will have no result, and will not throw an error.
  
#### Continue to [4 - Labs](4_Labs.md)