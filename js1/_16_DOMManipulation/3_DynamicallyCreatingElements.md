### Dynamically Creating Elements
* The document object is capable of creating new `Element` objects programmatically.
  
```javascript
var div = document.createElement('div');
```
  
* Once created, elements can have attributes assigned to them as properties.
  
```javascript
var div = document.createElement('div');
div.id = 'myDiv';
console.log(div); // div#myDiv
```
  
* Created elements have no relationship to the DOM, until they are appended (i.e. added) to a Document element using `.appendChild(element)`.
  
```javascript
var div = document.createElement('div');
div.id = 'myDiv';

// add the div to the end of the body
document.body.appendChild(div);

console.log(div) // <div id='myDiv'></div>
```
  
#### Appending Nested Elements Dynamically
* To populate a list of items dynamically from an array of unkown size you can use a series of loops, appending each item to the unordered list and then appending the updated element to the document.
  
```javascript
var items = [
		'apple', 
		'banana', 
		'coconut'
	];

var ul = document.createElement('ul');

items.forEach(function(value, index, array) {
	// create a new list item;
	var li = document.createElement('li');

	// assign the value at the current position 
	// in the array to the list item's text value
	li.textContent = value;

	// append the list item to the unordered list
	ul.appendChild(li);
});

// append the entire unordered list to the body
document.body.appendChild(ul);
```
  
#### Appending Forms to the DOM
* There are some situations in which you will want to create a form. These include users wanting to check out (they need to enter billing info), clicking on contact buttons, etc.
  
* Forms can be created and appended in the same way as any other elements:  

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>

        <script type="text/javascript">
	        // create the form, give it a name
			var form = document.createElement('form');
			form.name = 'contactForm';

			// create an input field
			var fname = document.createElement('input');
			fname.name = 'fname'; // assign a name attribute
			fname.type = 'text'; // assign a type attribute
			fname.placeholder = 'First Name'; // assign a placeholder attribute

			// append the input to the form
			form.appendChild(fname);

			// create a submit input
			var submit = document.createElement('input');
			submit.name = 'submit'; // assign a name attribute
			submit.type = 'submit'; // assign a type attribute
			submit.value = 'Post Name'; // assign a value attribute

			// Assign an event listener to the submit button
			submit.addEventListener('click', function(e) {
				e.preventDefault();

				var form = e.target.parentElement;
				// print the fname value to the console
				console.log(form.fname.value);

				// clear the form data
				form.reset();

			});

			// add the input to the form
			form.appendChild(submit);


			// add the form to the body
			document.body.appendChild(form);
        </script>
    </body>
</html>	

```
  


#### Continue to [4 - Dynamically Removing Elements](4_DynamicallyRemoveElements.md)