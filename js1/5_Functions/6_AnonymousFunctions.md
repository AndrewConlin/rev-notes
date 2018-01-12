### Anonymous Functions
* Anonymous functions are functions without identifiers.
  
* Anonymous functions can be used in any situation where a named function is used.
  
```javascript
// Create a function expression
var square = function(num) {
  return num * num;
}

square(5) // 25

// Create a function that returns a function based on the input type
function inputTypeFilter(input) {
  switch((typeof input)) {
    case 'string':
      return function(greeting) { console.log(greeting) }
    case 'number':
      return function(num) { return num * num }
    case 'object':
      return function(obj) {
        for (p in obj) {
          console.log(obj[p]);
        }
      };
    default:
      throw new Error('I don\'t know how to handle that');
  }
}

inputTypeFilter(9)(9) // 81

// Pass an anonymous function as an argument to a function
function callback(func){
  func();
}

callback(function() {
  console.log('Called the anonymous function that was \
    passed as an argument');
});

// Called the anonymous function that was     passed as an argument

```
  
> ### Higher Order Functions
> A *higher order function* is a function which can take another function as an argument, or a function which returns a function as a result.
>
> *higher order functions* are a core aspect of functional programming. They are so heavily integrated into the JavaScript language that you will use them (in the form of callbacks etc) without even realizing it.
  
  
#### Continue to [7 - Variable Scope](7_VariableScope.md)