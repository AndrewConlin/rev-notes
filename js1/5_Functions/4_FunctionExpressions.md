### Function Expressions
* JavaScript functions can be stored as values. This is important: **JAVASCRIPT FUNCTIONS CAN BE STORED AS VALUES**. Below is an example of how this can be accomplished with a declared function:
  
```javascript
function square(num) {
  return num*num;
}

var exponential = square;

square(5); // 25
exponential(5); // 25

```
  
* A function can be referenced by name and stored within a variable. This will pass the entire function declaration as a value.
  
* **NOTE**: invoking the function will store the return value of the function in the variable...not the function itself.
  
```javascript
function sayHello() {
  return 'Hello!';
}

var greet = sayHello(); // 'Hello!'

var greetFunc = sayHello; // function sayHello() { return 'Hello!' }
```
  

#### Continue to [5 - Functions as Arguments](5_FunctionsAsArguments.md)