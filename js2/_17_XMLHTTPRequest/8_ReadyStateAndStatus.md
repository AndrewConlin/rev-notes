### Use `status` and `readyState` Together
* You can use the `status` and `readyState` properties together to perform an action with successfully returned data when it is available:
  
```javascript
var xhr = new XMLHttpRequest();

xhr.open('GET', 'rest/todos');

xhr.onreadystatechange = function(){
	// If status is below error range, and readyState is 4 (DONE)
	if (xhr.status < 400 && xhr.readyState === 4) {
		console.log('SUCCESSFULLY PRINTOUT DATA');
		console.log(xhr.response)
		console.log(xhr.responseText)
	} else {
		console.error('ERROR!!!!');
	}
};

xhr.send(null);
```
  
#### Continue to [9 - `responseText` Property](9_ResponseText.md)