### Function Parameters
* JavaScript functions do **not** check the type of incoming arguments.
  
```javascript
function funType(array, num) {
  return array[num];
}

funType('hello', true); // 'hello'[true] ==> undefined
```
  
* Functions do **not** check the number of arguments being passed when a function is invoked.
  
```javascript
function oneParam(x) {
  return x * x;
}

oneParam(5,6,'hello',true,{},[42]); // 25
```
  
* The interpreter cannot differentiate between two functions with the same name (as it pays no attention to the number of parameters, and there is no return type). If you declare two functions with the same name, one will over write the other.  

```javascript
function overwrite(x,y) {
  return 'FIRST';
}

function overwrite(arr,index,value) {
  return 'SECOND';
}

overwrite(0,12); // 'SECOND'
```
  
* If it is imperative for a function to only accept certain types of arguments, you will have to enforce this yourself and perform type checking. Below is an example of how this could be handled:
1. Check the `constructor` property on the `array` parameter to determine if the object is an `Array` object
2. Check the `num` parameter's type
3. Check the `str` parameter's type
  
```javascript
function addStringToArrayAtIndex(array, num, str){
  // perform type checking
  if (
      array.constructor === Array && // 1
      typeof num === 'number' && // 2
      typeof str === 'string' // 3
     ) {
    array[num] = str;
    return array;
  } else {
    throw new Error('Args must be of types Array, \
      number, and string');
  }
  return;
}

addStringToArrayAtIndex([1,2,3,4,5],3,'Hello'); 
// [ 1,2,3,'Hello',5]

addStringToArrayAtIndex(5,3,'Hello');
// Error: Args must be of types Array, number, and string

```
  

#### Continue to [3 - Arguments Object](3_ArgumentsObject.md)