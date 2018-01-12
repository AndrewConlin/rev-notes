### Create and Open the Request
* As it's name implies `XMLHttpRequest` is a JavaScript object, the first step in using it is to create a new instance of it:
  
```javascript
var xhr = new XMLHttpRequest();
```
  
* With a new instance created, we can use the `.open(method[String],url[String],async[Boolean])` method to initialize the request.
  * `method`: is a string the corresponds to one HTTP methods ('GET', 'POST', 'PUT', or 'DELETE')
  * `url`: is a string of the URL to send the request to.
  * `async`: an optional boolean (default to `true`) indicating whether or not to perform the XMLHttpRequest asynchrnously.
  
```javascript
var xhr = new XMLHttpRequest();

// Asynchronous request (defaults to true)
xhr.open('GET', 'http://someUrl.com/resource', true);

// Synchronous request
xhr.open('GET', 'http://someUrl.com/resource', false);
```
  
#### Continue to [4 - Send an XMLHttpRequest](4_Send.md)