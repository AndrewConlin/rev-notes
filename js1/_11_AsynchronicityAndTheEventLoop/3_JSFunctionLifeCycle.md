### JavaScript Function Life Cycle
* How does JavaScript do this? What happens to a callback when it's invoking function exits the call stack? To answer these questions lets review the entire life cycle of an asynchronous function in the JS runtime:
  
```javascript
// in browser console
console.log('synchronous start');

setTimeout(function(){
	console.log('asynchronous callback return');
}, 500);

console.log('synchronous end');
```
  
```bash
# Results
synchronous start
synchronous end
asynchronous callback return
```
  
* The `setTimeout(callback,delay)` function takes two arguments. The first, a callback function to be executed after a delay (the second argument) in milliseconds. The function above will log 'asynchronous callback return' after roughly 1/2 second.

* This is the simplest example of async behavior in JavaScript, and is worth investigating more thoroughly.
  
* Let's walkthrough what is happening:

1. `console.log('synchronous start');` is added to the call stack

2. 'synchronous start' is logged to the console and `console.log('synchronous start');` is removed from the call stack

3. `setTimeout()` is added to the call stack

4. JavaScript delegates the `setTimeout()` function to the WebAPI and removes it from the call stack

5. `console.log('synchronous end');` is added to the call stack

6. 'synchronous end' is logged and `console.
log('synchronous end');` is removed from the call stack

7. The WebApi waits 500 milliseconds and then returns the callback function `console.log('asynchronous callback return');`, adding it to the 'task queue'.

8. The Event Loop observes that the task queue is not empty and prioritizes the next message in it to enter the call stack

9. `console.log('asynchronous callback return');` is removed from the task queue and placed on the call stack

10. 'asynchronous callback return' is logged and `console.log('asynchronous callback return');` is removed from the call stack
  
> #### Callback Delegation
> In step 4 above, the runtime delegated the `setTimeout` function to something called the 'WebAPI'. The WebAPI is one of several interfaces JS uses for added functionality. Each API consists of many objects which in turn have many properties and methods. As `setTimeout` is a method of the `Window` object which is the global browser object, it is within the WebAPI. The Window interface allows the client side JavaScript you right to communicate with the browser, thus connecting those end points. Similarly, there is a Node API that allows your server side code to interface with C++.
  
> When you delegate a callback to one of these APIs it performs the required tasks, and returns the callback you have specified (possibly with some updated values/data) to the task queue, where it will eventually be added to the call stack.
  

#### Continue to [4 - Resources](4_Resources.md)