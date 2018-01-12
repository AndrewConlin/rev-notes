### Node File System
* Traditional file IO is not a core feature of JavaScript, however, it is a core Node module
  
* The Node 'File System' module ('fs') adds file IO capabilites and offers both asynchronous and synchronous functions for us to experiment with.
  
* 'fs' is a core Node module, in order to use it, we must first require it in our file:
  
```javascript
// store the File System module in a variable 'fs'
var fs = require('fs');
```
  
* `var fs` now contains the `exports` object from the 'fs' module, giving us access to all of the properties and methods we will need.
    

#### Continue to [2 - Synchronous vs Asynchronous File IO](2_SyncVsAsyncFileIO.md)