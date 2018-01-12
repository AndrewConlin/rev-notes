### Capture returned data with `XMLHttpRequest.responseText`
* The `XMLHttpRequest.responseText` property returns a DOMString that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.
  
* In asynchronous XMLHttpRequests, the response data from the server can be captured with the `XMLHttpRequest.responseText` property in the callback function:
  

```javascript
var xhr = new XMLHttpRequest();

xhr.open('GET', 'rest/todos');

xhr.onreadystatechange = function(){
	if (xhr.status < 400 && xhr.readyState === 4) {
		// Print out the data that returns from the server
		console.log(xhr.responseText)
	/*
		[
			{"id":1,"title":"NO TITLE"},
			{"id":2,"title":"NO TITLE"},
			{"id":3,"title":"NO TITLE"},
			{"id":4,"title":"NO TITLE"},
			{"id":5,"title":"NO TITLE"}
		]
	*/
	} else if (xhr.readyState === 4 && xhr.status >= 400) {
		console.error('ERROR!!!!');
	}
};

xhr.send(null);
```
  
#### Continue to [10 - Convert Response to JSON](10_ConvertJSON.md)