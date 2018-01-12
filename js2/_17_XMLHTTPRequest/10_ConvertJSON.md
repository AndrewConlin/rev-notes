### Convert `responseText` Data to JSON
* The `XMLHttpRequest.responseText` property returns a DOMString representation of the returned data. In order to use the data as JSON and access it's properties, it must first be converted to JSON.
  
* The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON. It can't be called or constructed, and aside from its two method properties it has no interesting functionality of its own.
  
* Converting the DOMString in the `XMLHttpRequest.responseText` property to JSON, requires the JSON object's `JSON.parse()` method.
  
```javascript
var xhr = new XMLHttpRequest();

xhr.open('GET', 'rest/todos');

xhr.onreadystatechange = function(){
	if (xhr.status < 400 && xhr.readyState === 4) {
		// convert responseText to JSON
		var data = JSON.parse(xhr.responseText);

		// printout JSON data
		console.log(data);
	/*
		[
			Object,
			Object,
			Object,
			Object,
			Object
		]
	*/
		// printout the id of the first object
		console.log(data[0].id); // 1

	} else if (xhr.readyState === 4 && xhr.status >= 400) {
		console.error('ERROR!!!!');
	}
};

xhr.send(null);
```
  
* With the JSON parsed, it can be manipulated as standard JS objects.
  
#### Continue to Labs [11 - Labs](11_Labs.md)