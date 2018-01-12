### Functions as Arguments
* Given that functions are really just a type of object, and that functions can be stored in variables...you can pass functions as arguments to other functions.
  
  * The following example declares a number of functions. The first two (`square` and `sum`) are each worker functions, taking input and returning an updated value in a predictable way. The third function (`printMathResult`) takes a numeric input (either a single number or an array of numbers) and a function as parameters. In the body of `printMathResult`, the function passed as an argument is called by it's parameter name and passed the `num` input as an argument.
  * `printMathResult` does not know what function will be passed to it, nor does it care, whatever function is provided will be treated the same, and it's result will be logged.
  
```javascript
function square(num) {
  return num * num;
}

function sum(array) {
  var total=0, i;
  for (i = 0 ; i < array.length ; i++) {
    total += array[i];
  }
  return total;
}

function printMathResult(num, func) {
  console.log(func(num));
}

printMathResult([1,2,3,4,5,6,7,8,9,10],sum); // 55

printMathResult(5,square); // 25

```
  
* The ability to provide functions as arguments to other functions is extremely powerful, granting an extremely high degree of code reusability.
  

#### Continue to [6 - Anonymous Functions](6_AnonymousFunctions.md)