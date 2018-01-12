### Numbers
* In JavaScript there are no 'types' of numbers, however, decimal points do add precision to a degree. 'Integer' (non-decimal) values are accurate up to 15 digits, while decimals are accurate up to 17 digits.
  
* Floating point arithmetic can be inaccurate:
  
```javascript
var x = 0.1 + 0.2; // Inaccurate...0.30000000000000004

var y = 0.1;
var z = 0.2;
y + z; // Accurate...0.3
```
  
* `NaN` (not-a-number) is a number. `NaN` results from operations in which the result is non-numerical, like trying to divide a number by a string.

```javascript
var x = 5/"Banana"; // NaN
```
  
  
#### Continue to [4 - Strings](4_Strings.md)