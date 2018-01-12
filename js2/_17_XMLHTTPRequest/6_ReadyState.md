### Accessing the `readyState` Property
* The `XMLHttpRequest.readyState` property returns the state an XMLHttpRequest client is in.
  
* There are 5 ready states:
  
|Value|State|Description|
|:---:|:---:|---|
|0|UNSENT|Client has been created. open() not called yet.|
|1|OPENED|open() has been called.|
|2|HEADERS_RECEIVED|send() has been called, and headers and status are available.|
|3|LOADING|Downloading; responseText holds partial data.|
|4|DONE|The operation is complete.|
  
* In asynchronous programming it is necessary to perform an operation when data has been returned by the server (whenever that may be). The response data will be available to an XMLHttpRequest when the `readyState` is 4.
  
```javascript
var xhr = new XMLHttpRequest();

console.log(xhr.readyState); // 0 => UNSENT

xhr.open('GET', '/todos');

console.log(xhr.readyState); // 1 => OPENED

xhr.onreadystatechange = function(){
	console.log(xhr.readyState); 
	// 2 => HEADERS_RECEIVED
	// 3 => LOADING
	// 4 => DONE

	if (xhr.readyState === 4) {
		console.log(xhr.readyState + ' Operation is complete'); 
		// 4 Operation is complete
	}
};

xhr.send(null);
```
  
#### Continue to [7 - `status` Property](7_Status.md)