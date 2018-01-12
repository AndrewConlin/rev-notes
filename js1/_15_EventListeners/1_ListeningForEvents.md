### Listening For Events
* Event Listeners are methods registered on specific targets. The target of an even listener could be an HTML element, the Document object, or the Window object itself.
  
* The method `target.addEventListener(type, callback)` registers the event listener (`type`) onto the target, when the event is observed on the target, it triggers the `callback` (or `listener`), which is usually a function:
  
```javascript
// Print loaded to console when the window object loads
window.addEventListener('load', function(e){
	console.log('LOADED');
});
```
  
* Instead of using an anonymous function (as above), you can use a named function for the listener above.
  
```javascript
var confirmWindowLoad = function(e) {
	console.log('LOADED');
};

window.addEventListener('load', confirmWindowLoad);
```
  

#### Continue to [2 - Available Event Listeners](2_UsingEventListeners.md)