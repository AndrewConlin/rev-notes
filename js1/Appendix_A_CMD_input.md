# Appendix A: Command-Line Input

* JavaScript does not have a true equivalent to Java's `Scanner` class.
  
* Luckily, Node can help us simulate the behavior of Scanner with `readline`.
  
* `readline` is a node module (similar to a Java class) that allows a program to continuously interact with command line input.
  
* The example below is a fairly simple implementation that should look fairly similar. Ignore the first few lines, they are simnply boiler plate setup.

```javascript
var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function ask() {
	// Prompt for input
	rl.question('What is your name?\n', 
		// Collect answer in callback function
		function(answer) {
			if (answer !== answer.toUpperCase()) {
				ask()
			} else {
				// Write to console (could simply use a console.log)
				rl.write('SEE YOU LATER!');
				// close the resource (i.e. exit)
				rl.close();
			}
	});
}

ask();
```
