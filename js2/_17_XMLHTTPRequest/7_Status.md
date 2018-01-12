### Checking the Response Status with the `status` Property
* The `XMLHttpRequest.status` property returns the numerical status code of the response of the XMLHttpRequest. status will be an unsigned short. Before the request is complete, the value of status will be 0. It is worth noting that browsers report a status of 0 in case of XMLHttpRequest errors too.
  
* The status codes returned are the standard HTTP status codes. For example, status 200 denotes a successful request. If the server response doesn't explicitly specify a status code, XMLHttpRequest.status will assume the default value of 200.
  
```javascript
var xhr = new XMLHttpRequest();

console.log(xhr.status); // 0

// '/todo/1' is a valid route and the server will respond 200
xhr.open('GET', '/todo/1');

console.log(xhr.status); // 0

xhr.onreadystatechange = function(){
	console.log(xhr.status); 
	// 200
	// 200
	// 200

	if (xhr.readyState === 4) {
		console.log(xhr.status + ' Operation is complete'); 
		// 200 Operation is complete

		// PERFORM SOME CALLBACK
	}
};

xhr.send(null);
```
  
* You may want to perform different operations depending on what happens on the server side, `XMLHttpRequest.status` allows you to account for different responses from the server.
  
```javascript
var xhr = new XMLHttpRequest();

xhr.open('GET', '/todos');

xhr.onreadystatechange = function(){
	// Everything went well
	if (xhr.status === 200) {
		console.log('Success!!!');
	}

	// Status is in the error range, handle the response
	if (xhr.status >= 400) {
		console.log('Some ERROR occurred');
	}
};

xhr.send(null);
```
  
#### Continue to [8 - `readyState` and `status` Together](8_ReadyStateAndStatus.md)