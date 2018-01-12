# TypeScript

Docs: http://www.typescriptlang.org/docs/tutorial.html
Tutorial : http://www.typescriptlang.org/docs/tutorial.html

* Superset of JS -> all JS (and ES) is valid TS

* ES6 is the future (eventually everything will be there...ish)
  * major update
  * lots of syntactic sugar to mirror classical inheritance, add generators etc
  * modules, import/export functionality etc
  * ability to compile down to legacy ES* means that backwards compatibility will be simplified

* ES Modules, TS Modules (Namespaces), Ng Modules...these are all different things
  * transpiled to conform to specification

* ES Modules are solving the problem that created things like RequireJS etc as work arounds

* Hardest things about Ng2 are modern JS (not Ng2 itself)

* Transpiles src map files that will trace errors from transpiled es5 back to src .ts files (e.g. errors map to the code you wrote, not the crap you transpiled)

* TypeScript is gaining interest consistently over time.


### Example
```js
// class
class Person {
    // constructor / can declare typed fields in here
    constructor(private name:string) {
    }

    // access modifier / method / return type
    public getName(): string {
        return this.name;
    }
}

// syntactic sugar for inheritance
class Employee extends Person {
    constructor(n: string, private salary: number) {
        super(n);
    }

    public getSalary(): number {
        return this.salary;
    }

    getDetails(): void {
        console.log(`
            name : ${this.getName()}
            salary : \$${this.getSalary()}
        `);
    }
}

class Student extends Person {
    constructor(n: string, private gpa: number) {
        super(n);
    }

    public getGpa(): number {
        return this.gpa;
    }

    getDetails(): void {
        console.log(`
            name : ${this.getName()}
            gpa : ${this.getGpa()}
        `);
    }
}

// const is a constant
const PEOPLE = [
    new Employee('John', 50000),
    new Employee('Dan', 50000),
    new Employee('Joe', 50000),
    new Student('Kris', 4.0)
];

// fat arrow functions
PEOPLE.forEach((person) => person.getDetails());

PEOPLE.forEach((person) => console.log(person.getName()));
```

### What Arrow Functions Do (TS Example)
* example:

```js
// TypeScript
class Timer {
    counter: number = 0;

    startTimer() {
        window.setInterval(() => {
            console.log(`Fired: ${this.counter}`);
            this.counter += 1;
        }, 1000)
    }
}

var timer = new Timer();
timer.startTimer();
```

* Transpiled ES5

```js
var Timer = (function () {
    function Timer() {
        this.counter = 0;
    }
    Timer.prototype.startTimer = function () {
      // Automatically assigns this!!!
        var _this = this;
        window.setInterval(function () {
            console.log("Fired: " + _this.counter);
            _this.counter += 1;
        }, 1000);
    };
    return Timer;
}());
var timer = new Timer();
timer.startTimer();

```
