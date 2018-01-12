### Dynamically Remove Elements
* When a resource is no longer needed you may want to remove it from the DOM, or remove it and replace it with something else.
  
* To remove elements from the DOM we use `Node.removeChild(node)`:
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
  </head>
  <body>
  	<ul id='list'>
  		<li>things</li>
  	</ul>


    <script type="text/javascript">
    	// Select list
    	var list = document.getElementById('list');

    	// Remove the list's first child (that is an Element Node)
    	list.removeChild(list.firstElementChild);

    </script>
  </body>
</html>	
```
  
* This is useful if you want to remove a specific item (simply pass in the actual Element to remove to the `removeChild()` method).
  
* If you want to remove a full list of items, simply continue removing Elements in a loop until there are none left:
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
  </head>
  <body>
  	<ul id='list'>
  		<li>things</li>
  		<li>things</li>
  		<li>things</li>
  		<li>things</li>
  		<li>things</li>
  		<li>things</li>
  		<li>things</li>
  	</ul>


    <script type="text/javascript">
    	var list = document.getElementById('list');

    	// While the Element has a firstElementChild...remove it
    	while (list.firstElementChild) {
	    	list.removeChild(list.firstElementChild);
    	}
    </script>
  </body>
</html>	
```
  
* If you would like to remove the entire Element (not merely it's children), you can select it's parent using the `parentElement` property, and passing the Element to the the `removeChild()` method:
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
  </head>
  <body>
  	<ul id='list'>
  		<li>things</li>
  		<li>things</li>
  		<li>things</li>
  		<li>things</li>
  		<li>things</li>
  		<li>things</li>
  		<li>things</li>
  	</ul>


    <script type="text/javascript">
    	var list = document.getElementById('list');

    	list.parentElement.removeChild(list);
    </script>
  </body>
</html>	
```
  
* With this syntax you can remove the form from the previous example at the end of the event listeners callback function (we will also print the value to the DOM):
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>

        <script type="text/javascript">
			var form = document.createElement('form');
			form.name = 'contactForm';

			var fname = document.createElement('input');
			fname.name = 'fname';
			fname.type = 'text';
			fname.placeholder = 'First Name';

			form.appendChild(fname);

			var submit = document.createElement('input');
			submit.name = 'submit';
			submit.type = 'submit';
			submit.value = 'Post Name';

			submit.addEventListener('click', function(e) {
				e.preventDefault();

				var form = e.target.parentElement;
			
				// Write the name to to DOM instead of printing to console
				var h3 = document.createElement('h3');
				h3.innerText = form.fname.value;
				document.body.appendChild(h3);

			
				// ******** REMOVE THE FORM! *********
				form.parentElement.removeChild(form);

			});

			form.appendChild(submit);
		
			document.body.appendChild(form);
        </script>
    </body>
</html>	
```
  


#### Continue to [5 - Labs](5_Labs.md)