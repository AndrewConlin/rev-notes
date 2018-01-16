# ES6

Demo: https://github.com/DanWahlin/ES6Samples

"docs": http://es6-features.org/#Constants

### Template Strings

```js
const name = `World`
let response = `Hello ${name}!` // Hello World!
```

### `let`, `const`

http://2ality.com/2015/02/es6-scoping.html

* `let` => block scoped

* `const` => block scoped, immutable

### class

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

```js
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}
```

### inheritance

```js
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}
```

### constructor
The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

The super keyword is used to call functions on an object's parent.

### Arrow Functions
* aka 'fat arrows'

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

* fixes the `this` issue for methods

* with no body, return is implicit

```js
const sum = (x,y) => x + y;
```

* with body, return is necessary

```js
const sum = (x,y) => {
  return x + y;
}
```

* assign named arrow functions to constants as good practice...HOWEVER, it is cumbersome and the assignment WILL NOT be hoisted like a function declaration. Either way will work, it's a style guide choice.

### `import` / `export`

THIS WILL BE HARD TO DEMONSTRATE WITHOUT A BUILD TOOL / ENVIRONMENT TO ACT AS A MODULE LOADER

http://exploringjs.com/es6/ch_modules.html --> too much information, but thorough


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
