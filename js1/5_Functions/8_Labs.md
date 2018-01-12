### Labs
  
0: Create a file named 'functions.js'  

1: Create a function named square that accepts on parameter. Have 'square' return the value of the number passed to it squared (i.e. square(5) would return 25). Test your functions return with console.log(square(5))
  
2: What happens if you invoke the `square()` function with a non-numeric string argument?  
  
Use `isNaN()` to validate the input. Return a string `Invalid input, please enter a number` if the input is not valid.  
  
3: Modify you `square()` function to be a variadic function. If it is invoked with only one argument, square it. If it is invoked with two arguments (and they are both numbers), return the first argument to the power of the second argument (i.e. `square(5,3)` => 125)
  

4: Create a new function named `sum()`. `sum()` will accept any number of arguments and return the sum of all of the numbers (or strings that can be coerced into numbers). `sum()` will treat all non numbers (except strings that can be coerced into numbers) as zeros.  
  
5: Modify your `sum()` function from #4. Check if the first argument invoking the function is a function, if it is, use that function to operate on each of the other inputs, and compute the sum value of all of the arguments after that function has altered the value i.e.:  
  
total = total + (x-5). Where (x-5) is the function that was passed as an argument.  
  
Now write an anonymous function as the first argument to the function.  
  
6: Write one method to calculate temperature. The method should have two parameters, the first should be a numeric temperature, the second should be a string. If the string is 'f', 'fahrenheit', 'c', or 'celsius', perform the conversion to the indicated temperature (i.e. convert the number to fahrenheit if 'f' is provided). If no string is provided, convert to fahrenheit by default.  

#### Back to [Table of Contents](../README.md)