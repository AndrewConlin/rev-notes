# Getting Started with Node
### Terminology
Node - is an asynchronous event driven framework
npm - is node's package manager (fun fact: it is not an acronym for Node Package Manager, it is just npm)  

### History
Node was created by extracting the Google Chrome JavaScript engine (called 'V8'), and customizing it work as a runtime environment.

### Install
In a perfect world all you will need to do is go to [nodejs.org][node], click the "v4.3.1 LTS" button, and follow the installer's instructions.  
![node](imgs/node)  
  
Bonus, installing Node should correctly install npm for you as well.  
  
Double check the install. Open your terminal:  
![check install](imgs/check_install) 

##### Check Node  
* create a file named "test.js"
* add `console.log("Working correctly");`
* save the file
* from terminal enter `node test.js`
* you should see `Working correctly` print out.  
  
If you get an error, Node might be your problem.  
  
##### Check npm
Let's make sure that you can use npm
* create a directory named "test" and change directory into it
* now in terminal enter `sudo npm intall express`
* you should see something like this:
  
![express installed](imgs/express)  
  
* if you get an error, you may have typed it incorrectly...or you might have a problem with npm
  
