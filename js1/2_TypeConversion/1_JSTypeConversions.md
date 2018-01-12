### JavaScript Type Conversions
* JavaScript is extremely flexible about the types of values it requires. When a value of one type is expected, you may provide a value of any type and JavaScript will attempt to convert the provided value into the desired type.
  
* This behavior is easily observable with booleans:
  
```javascript
true == 'hello' // true
true == 1 // true

if(-999) {
	console.log('of course');
} // 'of course' --> -999 is truthy

true == 0 // false
true == '' // false
```
  
* Above, `true` is equivalent to an un-empty string (`'hello'`), but it is not equivalent to an empty string (`''`). In JavaScript these variables are said to have 'truthy' and 'falsy' values, which correspond to `true` or `false`.

  * '**truthy**'
    * Non-empty strings
    * Non-zero integers
    * Objects
    * Arrays
    * `true`
  
  * '**falsy**'
    * Empty strings
    * Zero (`0`)
    * `false`
    * `NaN`
    * `null`
    * `undefined`
  
* Here is an example of how 'truthy' and 'falsy' values can be used with JavaScript:
  
```javascript
var name; // undefined
var greeting; // undefined

if (name) {
  /*
    name is undefined.

    undefined is a 'falsy' value that will evaluate
    to false in this conditional.

    This 'if' block will be skipped and the code will 
    assign a value to greeting in the 'else' block
  */
  greeting = 'Hello ' + name;
} else {
  greeting = 'Hello World!';
}

console.log(greeting); // 'Hello World'
```
  
* 'truthy' and 'falsy' can be very useful when validating input values before they reach your database:
  
```javascript
var fname;
var lname = 'Johnson';

if (fname && lname) {
  // Do some server logic to store data
} else {
  throw new Error('Name fields must not be blank');
}

/*
Error: Name fields must not be blank
    at repl:4:7
    at REPLServer.defaultEval (repl.js:164:27)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:393:12)
    at emitOne (events.js:82:20)
    at REPLServer.emit (events.js:169:7)
    at REPLServer.Interface._onLine (readline.js:210:10)
    at REPLServer.Interface._line (readline.js:549:8)
    at REPLServer.Interface._ttyWrite (readline.js:826:14)
*/

```
  
#### Continue to [2 - Conversion Reference Table](2_ConversionReferenceTable.md)