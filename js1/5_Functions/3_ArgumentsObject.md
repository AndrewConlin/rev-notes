### The `arguments` Object
* All of the arguments passed to a function at time of invocation can be accessed within the body of that function via the `arguments` object. `arguments` is an array like object (**not an array**) that grants access to all arguments passed at the time of invocation by index.
  
* `arguments` is useful in that it can alter a functions behavior based on the number of inputs.
  
* You could create a switch statement that executed different operations based on the number of arguments:
  
```javascript
function varArgs() {
  switch(arguments.length) {
    case 0:
      throw new Error('No arguments');
    case 1:
      return arguments[0] * arguments[0];
    default:
      var sum = 0;
      for (var i = 0 ; i < arguments.length ; i++) {
        sum += arguments[i];
      }
      return sum;
  }
}

varArgs(); // Error: No arguments
varArgs(4); // 16
varArgs(4,3,6,7,8,10); // 38
```
  
* Functions like the one above are called *variadic functions* or *varargs functions*
  
  
#### Continue to [4 - Function Expressions](4_FunctionExpressions.md)