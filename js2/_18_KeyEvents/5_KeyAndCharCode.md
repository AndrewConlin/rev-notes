### `keyCode` and `charCode`
#### `keyCode`
* Each key on the keyboard is mapped to a corresponding `keyCode` value (for instance, 'a' is 65, and 'tab' is 9).
  
* The `keyCode` property can be accessed from the KeyboardEvent object passed to the event listener:
  
```javascript
addEventListener("keydown", function(e){
    console.log(e.keyCode);
});

// press the `a` key

>> 65
```
  
* By capturing the `keyCode` of the KeyboardEvent, you can dictate behavior:
  
```javascript
addEventListener("keydown", function(e){
    if (e.keyCode === 65) {
    	console.log('a');
    }
});
```
  
* You can also track multiple key presses (keep in mind that javascript tracks key events individually)
  
```javascript
var keys = [];

addEventListener("keydown", function(e){
	keys[e.keyCode] = true;

	// If both keys are true, do something
	if (keys[65] && keys[16]) {
		console.log('a + shift');
	}
});

addEventListener("keyup", function(e){
	keys[e.keyCode] = false;
});
```
  
* To determine what the `keyCode` for a key is, this site can help out: [keycode.info][keycode]
  
#### `charCode`
* The `charCode` property returns the ASCII value of the key that was pressed.
  
* However, `charCode` is in the process of being deprecated and it is advised that you not use it.
  
* To retrieve the string value of a key or char code, you can use the `String` class method `String.fromCharCode();`
  
```javascript
var keys = [];

addEventListener("keydown", function(e){
	keys[e.keyCode] = true;

	if (keys[65] && keys[16]) {
		console.log(String.fromCharCode(e.keyCode));
		// if 'a' is pressed first, => 'A'
		// if 'shift' is pressed first, => ''
	}
});

addEventListener("keyup", function(e){
	keys[e.keyCode] = false;
});
```

[keycode]:http://keycode.info/