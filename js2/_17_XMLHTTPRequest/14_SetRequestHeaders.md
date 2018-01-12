### `setRequestHeader(header,value)`
* The XMLHttpRequest.setRequestHeader() method sets the value of an HTTP request header. You must call setRequestHeader()after open(), but before send(). If this method is called several times with the same header, the values are merged into one single request header.
  
* There are many header values which can be assigned for various purposes. In order to communicate JSON to a server, we will specifically focus on the 'Content-type' header. By default servers will interpret the Request Body as text.
  
* In order to have the server use the included object from an XMLHttpRequest as an object, we must set the 'Content-type' header to 'application/json'.
  
```javascript
var obj = { title : "hello world" };
var jsonString = JSON.stringify(obj);

var xhr = new XMLHttpRequest();
xhr.open('POST', 'rest/todos');

// Let the server know what we are sending it
xhr.setRequestHeader('Content-type', 'application/json');

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status < 400) {
		console.log(xhr.status);
		console.log(xhr.responseText);
	}
	if (xhr.readyState === 4 && xhr.status >= 400) {
		console.error(xhr.status + ': ' + xhr.responseText);
	}
};

xhr.send(jsonString);
```
  
* With the header set correctly, the server should respond '201: Created' (or 200), and handle the creation of the object.
  
#### Continue to [15 - Labs](15_Labs.md)
