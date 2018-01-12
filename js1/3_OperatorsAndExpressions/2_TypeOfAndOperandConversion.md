### `typeof` and Operand Conversion
* The `typeof` operator returns a string representation of the type of the provided value.
  
```javascript
typeof 9; // 'number'
typeof 'hello'; // 'string'
typeof []; // 'object'
typeof {}; // 'object'
typeof function(){}; // 'function'

var x = '9';
typeof x; // 'string'
```
  
* To convert from one primitive type to another (i.e. string/number), there are global methods at your disposal:
  
1: `parseInt(num);`  

```javascript
parseInt('9'); // 9
parseInt('9.999'); // 9 => note the loss of precision

parseInt('hello'); // NaN

parseInt(true); // NaN
parseInt(false); // NaN

parseInt([]); // NaN
parseInt([9]); // 9
parseInt(['9']); // 9
parseInt(['9', '6']); // 9 => only parse's the first index, ignoring the rest
```
  
2: `parseFloat(num);` functions the same as `parseInt()` except that it preserves the precision of decimal numbers.
  
  
```javascript
parseFloat('9'); // 9
parseFloat('9.999'); // 9.999
```
  
3: `Object.toString()`

```javascript
'89'.toString(); // '89'
'hello'.toString(); // 'hello'

56.toString(); // SyntaxError...
var num = 56;
num.toString(); // '56'

[].toString(); // ''
[1,2,3,4].toString(); // '1,2,3,4'

{}.toString(); // SyntaxError...
var obj = {};
obj.toString(); // '[object Object]'

```
  

#### Continue to [3 - Operator Reference Table](3_OperatorReferenceTable.md)