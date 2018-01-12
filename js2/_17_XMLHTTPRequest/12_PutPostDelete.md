### PUT, POST, DELETE with XMLHttpRequest
* In order to perform RESTful updates with XMLHttpRequest you will need to provide additional data (the update) to the server.
  
* In previous examples we passed `null` to the `XMLHttpRequest.send(null)` method, thus not providing a body with our request.
  
* In order to include a Request Body with our request, we must pass an object to the XMLHttpRequest:
  *  convert the JSON to a DOMString that can be conveyed over HTTP
  *  set the Request Headers to indicate that the data being received is JSON
  
* To use these additional REST verbs with a XMLHttpRequest, you simply need to replace the first argument in the `XMLHttpRequest.open()` with one of them:
  
```javascript
var xhr = new XMLHttpRequest();
xhr.open('DELETE', 'rest/todos/1');

xhr.onreadystatechange = function() {};

xhr.send(null);
```
  
* While the above example will be sevicible for deleting a record (simply using the id represented by the path variable for identification), it will not provide update information for the purposes of an edit with a 'PUT', nor will it be serviceable for creating with 'POST'...each of these will require us to include additional information with the Request.

  
#### Continue to [13 - Stringify JSON](13_Stringify.md)