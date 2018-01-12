### Create a XMLHttpRequest Module
* XMLHttpRequests are extremely verbose and highly repetetive.
  
* You can encapsulate XMLHttpRequest functionality in a reusable module or method for your own convenience:
  
```javascript
var $xhr = (function(BASE){
	const BASE_URL = BASE;

	return function (url, callback, method, object, type) {
		var url = BASE_URL + url;
		var callback = (callback) ? callback : (function(){})
		var method = (method) ? method : 'GET';
		var object = (object) ? JSON.stringify(object) : null;
		var type = (type) ? type : 'text/html;charset=utf-8'

		var xhr = new XMLHttpRequest();
		
		xhr.open(method, url);

		xhr.setRequestHeader('Content-type',type);

		xhr.onreadystatechange = function(){
			var data;
			if (xhr.getResponseHeader('Content-type') === 'application/json') {
				data = JSON.parse(xhr.responseText);
			} else {
				data = xhr.responseText;
			}
			
			callback(xhr,data);
		};

		xhr.send(object);
	}

});
```
  
* Let's break that down:
  
```javascript
var $xhr = (function(BASE){ // 1: Take a base URI as an argument
	const BASE_URL = BASE; // 2: Assign the base URI to a constant,
	                       // this constant will be stored in the closure

	 // 3: Create and return a function
	return function (url, callback, method, object, type) {
		// 4: Set the url to the constant + the argument
		var url = BASE_URL + url;

		// 5: Set a default callback function which does nothing
		var callback = (callback) ? callback : (function(){})

		// 6: Assign a default method of 'GET'
		var method = (method) ? method : 'GET';

		// 7: Either stringify the object, or set it to null;
		var object = (object) ? JSON.stringify(object) : null;

		// 8: Set the default 'Content-type' to text
		var type = (type) ? type : 'text/html;charset=utf-8'

		// 9: Create the XMLHttpRequest
		var xhr = new XMLHttpRequest();
		
		// 10: Dynamically set the method and url based on input
		xhr.open(method, url);

		// 11: Set the 'Content-type' based on input (or lack there of)
		xhr.setRequestHeader('Content-type',type);

		xhr.onreadystatechange = function(){
			var data;
			// 12: If the response 'Content-type' is JSON, parse it
			// and assign the result to the data variable
			if (xhr.getResponseHeader('Content-type') === 'application/json') {
				data = JSON.parse(xhr.responseText);
			
			// 13: If it's not JSON, don't parse it
			} else {
				data = xhr.responseText;
			}
		};

		// 14: Send the stringified object (or null)
		xhr.send(object);
	}

});
```
  
* Implementing the above would look like this: 
  
```javascript	
var $xhr = (function(BASE){
	const BASE_URL = BASE;

	return function (url, callback, method, object, type) {
		var url = BASE_URL + url;
		var callback = (callback) ? callback : (function(){})
		var method = (method) ? method : 'GET';
		var object = (object) ? JSON.stringify(object) : null;
		var type = (type) ? type : 'text/html;charset=utf-8'

		var xhr = new XMLHttpRequest();
		
		xhr.open(method, url);

		xhr.setRequestHeader('Content-type',type);

		xhr.onreadystatechange = function(){
			var data;
			if (xhr.getResponseHeader('Content-type') === 'application/json') {
				data = JSON.parse(xhr.responseText);
			} else {
				data = xhr.responseText;
			}
			
			callback(xhr,data);
		};

		xhr.send(object);
	}

})('rest/'); 

var btn = document.createElement('button');
btn.textContent = 'click';
btn.addEventListener('click', function(){

	$xhr("todos", 
		function(xhr,data){ 
			if (xhr.readyState === 4 && xhr.status < 400) {
				console.log(xhr.status);
				console.log(data);
			}
			if (xhr.readyState === 4 && xhr.status >= 400) {
				console.error(xhr.status + ': ' + data);
			}
		},
		'POST', 
		{ title : "hello world" }, 
		'application/json' 
	);

});
```
  
* For something simpler like a 'GET' request, the implementation would be:
  
```javascript
	var btn = document.createElement('button');
	btn.textContent = 'click';
	btn.addEventListener('click', function(){

		$xhr("todos", // Declare RESTful extension
			function(xhr,data){ // Callback function
				if (xhr.readyState === 4 && xhr.status < 400) {
					console.log(xhr.status);
					console.log(xhr.responseText);
				}
				if (xhr.readyState === 4 && xhr.status >= 400) {
					console.error(xhr.status + ': ' + xhr.responseText);
				}
			// Don't include method, object or type as the defaults suit the request
			}
		);

	});
```
  
#### ALTERNATIVE: Using an Object as an Argument
* As an alternative to using function arguments to set values, you could use an argument as an argument, and assign values to the property.
  
* This approach has one tremendous benefit over passing a function for assignment. The order of arguments becomes irrelevant as all arguments values can be accessed as properties from the provided object. Added bonus, when you are calling the function, you can assign the values to properties by name, eliminating confusion about what goes where.
  
* The following is an example implementation of that approach:
  
```javascript
	var $xhr = (function(BASE){
		const BASE_URL = BASE;

		return function (options) { // only accept an 'options' object
			var url = BASE_URL + options.url;
			var callback = (options.callback) ? options.callback : (function(){})
			var method = (options.method) ? options.method : 'GET';
			var object = (options.object) ? JSON.stringify(options.object) : null;
			var type = (options.type) ? options.type : 'text/html;charset=utf-8'

			var xhr = new XMLHttpRequest();
			
			xhr.open(method, url);

			xhr.setRequestHeader('Content-type',type);

			xhr.onreadystatechange = function(){
				var data;
				if (xhr.getResponseHeader('Content-type') === 'application/json') {
					data = JSON.parse(xhr.responseText);
				} else {
					data = xhr.responseText;
				}
				
				callback(xhr,data);
			};

			xhr.send(object);
		}

	})('rest/');
	
	var btn = document.createElement('button');
	btn.textContent = 'click';
	btn.addEventListener('click', function(){

		$xhr({ // Pass an object literal as an argument
			url : 'todos', // assign property vales
			method : 'POST',
			type : 'application/json',
			object : { title : "hello world" },
			callback : function(xhr,data){ 
				if (xhr.readyState === 4 && xhr.status < 400) {
					console.log(xhr.status);
					console.log(data);
				}
				if (xhr.readyState === 4 && xhr.status >= 400) {
					console.error(xhr.status + ': ' + data);
				}
			}
		});

	});
```
  
* The above is EXTREMELY similar to the implementation of the `.ajax()` method in the jQuery library.
  
  
#### Back to [Table of Contents](../README.md)