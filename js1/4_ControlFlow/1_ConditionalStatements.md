### Conditional Statements
* JavaScript `if` statements are identical to their Java counterparts syntax.
  
```javascript
// simple
if (1 < 2) {
	// do something
}

// With an else clause
if (true) {
	// do something
} else {
	// do some other thing
}

// With more conditions

var num = 9;
if (typeof num === 'number') {
	// do this thing
} else if (typeof num === 'string') {
	// do this other thing
} else {
	// otherwise do this
}
```
  
* `switch` statement syntax should also be very familiar.
  
```javascript
switch(num) {
	case 1:
		// do something
		break; // --> Stop! Do not cascade
	case 2:
		// do something
		// --> no break, keep going
	default: 
		// do this if nothing else
		break;
}
```
  
#### Continue to [2 - Loops](2_Loops.md)