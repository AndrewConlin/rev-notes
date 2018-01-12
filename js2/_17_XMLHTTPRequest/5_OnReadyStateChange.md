### Using `onreadystatechange`
* The `XMLHttpRequest.onreadystatechange` property contains the event handler to be called when the readystatechange event is fired, that is every time the `readyState` property of the XMLHttpRequest changes. The callback is called from the user interface thread.
  
```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://someURL.com');

// use the change in readyState to fire a callback
xhr.onreadystatechange = function(){};

xhr.send(null);
```
  
#### Continue to [6 - `readyState` Property](6_ReadyState.md)