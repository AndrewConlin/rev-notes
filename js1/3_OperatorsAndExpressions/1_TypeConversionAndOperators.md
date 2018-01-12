### Type Conversion and Operators
* Automatic type conversion can produce unexpected results when particularly with mathematical calculations involving non-numbers:
  
```javascript
1 + 2; // 3 => Addition
'1' + '2'; // 12 => concatenation

// Numeric Strings
'1' + 5; // 15 => String concatenation
'1' - 5; // -4 => type conversion and mathematical subtraction

// String literals
'hello' + 9; // 'hello9' => String concatenation
'hello' - 9; // NaN => The resulting value is non-numerical

// Booleans
true + true; // 2 => Convert true to 1, perform mathematical addition
false + true; // 1 => '', convert false to 0, perform addition
false + false // 0 => ''

// null and undefined values
1 + null; // 1 => null is converted to 0, then addition
1 + undefined; // NaN => for numeric operations undefined converts to NaN

// Divide by 0
4/0; // Infinity => Infinity is a valid number type in JS
-4/0; // -Infinity => ...so is -Infinity
```
  

#### Continue to [2 - `typeof` and Operand Conversion](2_TypeOfAndOperandConversion.md)