### 5 Labs

0: Create an `order.txt` file and an `app.js` file  
  
1: In `order.txt` on the first line, add `Martha Allen, 1279`
  

2: In `app.js` require File System, and use the `fs.readFile(file,callback)` function to read the first line of your `order.txt`, for now, just print out the data as a string to the console

  
3: In `app.js` refactor your `fs.readFile()` so that it checks for the existence fo the file `fs.exists(file)`
  

4: In `app.js` refactor your `fs.readFile()` to be a Module (use the Revealing Module Pattern). Don't forget to pass it the file location (i.e. `order.txt`), store it in a variable named 'fileReader'
  

5: In `app.js` read from the file with your `fileReader` function
  

6: In `app.js` refactor your `fileReader` module to take a callback function as an argument. Invoke `fileReader` with a callback function that will capitalize the `Martha Allen`'s name (**hint**: you can split a comma separated string with the `.split(',')`)
  

7: Create a new file named `fileReader.js`, export your module from it and require it in `app.js`. When you are done, everything should work as it did before


#### Back to [Table of Contents](../README.md)