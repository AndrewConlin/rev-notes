### `JSON.stringify(obj)`
* The `JSON.stringify(value)` method converts a JavaScript value to a JSON string.
  
```javascript
var obj = { name : 'Jim', age : 28 };
var jsonString = JSON.stringify(obj); // '{ "name" : "Jim", "age" : 28 }'
```
  
* Once 'stringified', the JSON can be conveyed over HTTP and interpreted by the server:
  
```javascript
var obj = { title : "hello world" };
var jsonString = JSON.stringify(obj);

var xhr = new XMLHttpRequest();
xhr.open('POST', 'rest/todos');

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
  
* The above example will send the 'stringified' JSON object to the server...unfortunately, we didn't let the server know to expect JSON, and we receive a Response Status of 415 (unsupported media type):
  
```bash
application.js:27 POST http://localhost:8080/RestAPI/rest/todos 415 (Unsupported Media Type)

415: <!DOCTYPE html><html><head><title>Apache Tomcat/8.0.30 - Error
 report</title><style type="text/css">H1 {font-family:Tahoma,Arial,sans
 -serif;color:white;background-color:#525D76;font-size:22px;} H2 {font-
 family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;
 font-size:16px;} H3 {font-family:Tahoma,Arial,sans-serif;color:white;
 background-color:#525D76;font-size:14px;} BODY {font-family:Tahoma,
 Arial,sans-serif;color:black;background-color:white;} B {font-
 family:Tahoma,Arial,sans-serif;color:white;background-color:#525D76;} 
 P {font-family:Tahoma,Arial,sans-serif;background:white;color:black;
 font-size:12px;}A {color : black;}A.name {color : black;}.line 
 {height: 1px; background-color: #525D76; border: none;}</style> </
 head><body><h1>HTTP Status 415 - </h1><div class="line"></div><p><b>
 type</b> Status report</p><p><b>message</b> <u></u></p><p><b>
 description</b> <u>The server refused this request because the 
 request entity is in a format not supported by the requested resource 
 for the requested method.</u></p><hr class="line"><h3>Apache Tomcat/8.
 0.30</h3></body></html>

```
  
* This error almost always indicates that you haven't set the Request Headers 'Content-type' to indicate to the server that the information you have included should be interpreted as JSON.
  
#### Continue to [14 - `setRequestHeader()`](14_SetRequestHeaders.md)