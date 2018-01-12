### Asynchronicity
* Asynchronous (or async) code is code that executes and then waits for a response (like file i/o completion) before continuing on to perform another task.
  
* What differentiates asynchronous and synchronous code is that while a synchronous program will wait for the task to complete, locking up the program until it completes and not allowing any other code to run, async programs will continue to run other tasks.
  
* In most programming languages (Java, C#, Ruby etc), this is accomplished with a multi-threaded implementation of Asynchronous Method Invocation (AMI).
  

#### Continue to [2 - Event Loop](2_EventLoop.md)