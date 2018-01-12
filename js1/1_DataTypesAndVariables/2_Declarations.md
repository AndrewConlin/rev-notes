### Declarations
* Unlike Java, JavaScript is an untyped language. This means that when declaring variables, you do not have to designate their type.
  
* To declare a JavaScript variable, use the `var` keyword and assign the variable a name.
  
```javascript
var age = 30;
```  
* JavaScript variable declaration can occur anywhere in a `.js` file, and the variable will fall into one of JavaScript's two scopes.
  * A *Global Variable* is defined outside of a function, anywhere in your code
  * A *Local Variable* is defined within a function.
  

### Variable Names
* Must **not** be reserved words
* Must **not** start with a number
* Can start with an underscore (`_`)
* Are case-sensitive

```javascript
var break; // Invalid...'break' is reserved
var 9hello; // Invalid...begins with a number
var _name; // Valid...underscores are fine
var age; // != var Age;...case-sensitivity
```
##### Reserved Words (Not to be used as variable names)
|   |   |   |   |
|---|---|---|---|
|abstract | else | instanceof | switch |
|boolean | enum | int | synchronized |
|break | export | interface | this |
|byte | extends | long | throw |
|case | false | native | throws |
|catch | final | new | transient |
|char | finally | null | true |
|class | float | package | try |
|const | for | private | typeof |
|continue | function | protected | var |
|debugger | goto | public | void |
|default | if | return | volatile |
|delete | implements | short | while |
|do | import | static | with |
|double | in | super | |
  
  
#### Continue to [3 - Numbers](3_Numbers.md)
