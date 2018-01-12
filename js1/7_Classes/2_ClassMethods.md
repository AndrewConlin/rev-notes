### Class Methods
* Similar to objects, classes can have properties which store functions (methods).
  
```javascript
function Tree() {
	this.fruit = 0;

	this.bearFruit = function() {
		this.fruit += Math.floor((Math.random() * 10) + 1);
	};

}

var tree = new Tree();
tree.fruit; // 0
tree.bearFruit();
tree.fruit; // 4
```
  

#### Continue to [3 - Static Fields and Methods](3_StaticFieldsAndMethods.md)
