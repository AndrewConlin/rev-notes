### Using `send()`: To Dispatch a XMLHttpRequest
* To dispatch an XMLHttpRequest to a server, use the `.send()` method
  
* The `XMLHttpRequest.send()` method sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent. If the request is synchronous, this method doesn't return until the response has arrived. `send()` accepts an optional argument for the request body. If the request method is GET or HEAD, the argument is ignored and request body is set to `null`.
  
* **NOTE**: Don't use XMLHttpRequest synchronously, this will block the thread and there is no reason to use a synchronous XMLHttpRequest.
  
```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://someURL.com');

// send the request (defaults to null argument)
xhr.send(null);
```
  
#### Continue to [5 - `onreadystatechange` Property](5_OnReadyStateChange.md)
