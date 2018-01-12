### `module.require(id)`
* The `require(id)` method takes a string as an argument (the name of, or path to a resource file), and returns the `module.exports` object of the module.
  
* `require()` allows us to import the exposed functionality of our files throughout our application. This makes our code better encapsulated, more reusable, and better organized.
  
* As an example, let's require the 'hello.js' file into a file named 'main.js':
  
```javascript
// in main.js
var hello = require('./hello'); // { [Function] world: [Function], node: [Function] }

hello.node();
hello.world();
```
  
* When 'main.js' is run (with `node main.js`), the output will be:

```bash
> node main.js
Hello Node
Hello world
```
  
* A few notes on how `require` looks for files:
  * `require` uses either a relative or absolute path to resolve file locations (i.e. `'/someFile'` or `'../../someFile'`)
  * The `.js` extension to file names is pre-supposed and is thus optional
  * If no path is provided to a module, Node will attempt to locate the module by:
    1. Checking the Node core modules
    2. looking for a directory called 'node_modules' and looking there
  

#### Continue to [3 - Labs](3_Labs.md)