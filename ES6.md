# ES6

Demo: https://github.com/DanWahlin/ES6Samples

"docs": http://es6-features.org/#Constants

### Template Strings

```js
const name = `World`
let response = `Hello ${name}!` // Hello World!
```

### `let`, `const`
* `let` => block scoped

* `const` => final

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

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

* fixes the `this` issue for methods

### `import` / `export`

THIS WILL BE HARD TO DEMONSTRATE WITHOUT A BUILD TOOL / ENVIRONMENT TO ACT AS A MODULE LOADER

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
