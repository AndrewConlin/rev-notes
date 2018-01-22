# TypeScript Skeleton
Setup (for reference) :
https://www.typescriptlang.org/docs/handbook/gulp.html

Browsers don't understand TypeScript. As a result, in order to use TypeScript in the browser you first need to convert it to JavaScript. This skeleton project is setup to do just that.

### Install


##### Node
*Node* is a JavaScript runtime that works on your computer. Importantly, Node also includes a package manager called *npm*. These two tools allow you to configure and run a JavaScript application and it's dependencies locally on your computer.

* Download NodeJS : https://nodejs.org/en/

* Open the package, and follow the steps in the installation wizard.

* Check that Node and npm are installed:

```
>> node -v
v8.2.1
>> npm -v
5.5.1
```

##### Install Dependencies
*Node* projects must include a `package.json` file. This file defines various configuration settings for the project, including scripts that npm can run, npm dependencies (called *node_modules*), etc.

* Navigate to the project directory in terminal and run `npm install`. This task will download all of the required dependencies for the project.


### Run the project
With the dependencies installed, you can run the project. We have pre-configured this project to transpile TypeScript files and build them into a single file (`dist/bundle.js`) which is already sourced into `dist/index.html`.

* Run the project from terminal by typing `npm run serve`.

  * this script will automatically open the index.html file in Chrome and run the build.

  * ***NOTE***: The first time you run the script, it will fail to find the `index.html` (it hasn't been created yet). That's ok, just use `ctrl + c` to exit the build process and run `npm run serve` again.

### Skeleton Structure

ts-skeleton
├── README.md
├── dist
│   ├── bundle.js
│   └── index.html
├── gulpfile.js
├── package-lock.json
├── package.json
├── node_modules
├── src
│   ├── main.ts
│   └── views
│       └── index.html
└── tsconfig.js

* you will only edit files in the `src` directory, any you should only put `.ts` files in the `src` directory.

* the `dist` directory is where the `bundle.js` and `index.html` will be available for you to use.

* do not touch any of the configuration files.
