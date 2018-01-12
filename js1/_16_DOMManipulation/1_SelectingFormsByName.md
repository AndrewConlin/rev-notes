### Selecting Forms and Form Attributes by Name
* The Document object makes selecting forms incredibly easy using the `name` attribute on an HTML form
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>
    	<form name='myForm'>
    	</form>

        <script type="text/javascript">
			console.log(document.myForm); // <form name='myForm'> ... </form>
        </script>
    </body>
</html>
```
  
* Similarly you can select the `input`s from within a form using their name attributes:
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>
    	<form name='myForm'>
    		<input type='text' name='fname' />
    		<input type='text' name='lname' />
    		<input type='submit' name='submit' value='submit' />
    	</form>

        <script type="text/javascript">
			console.log(document.myForm.fname); // <input type='text' name='fname' />
			console.log(document.myForm.lname); // <input type='text' name='lname' />
			console.log(document.myForm.submit); // <input type='submit' name='submit' value='submit' />
        </script>


    </body>
</html>
```
  
* With these elements selected, we can access their html attributes as properties on their objects:  

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>
    	<form name='myForm'>
    		<input type='text' name='fname' />
    		<input type='text' name='lname' />
    		<input type='submit' name='submit' value='submit' />
    	</form>

        <script type="text/javascript">
			console.log(document.myForm.fname.name); // fname
			console.log(document.myForm.lname.name); // lname
			console.log(document.myForm.submit.name); // submit
			console.log(document.myForm.submit.value); // submit
        </script>


    </body>
</html>
```
  
* This means that we can select values users enter to our fields with the `value` property when the form is submitted
  

#### Continue to [2 - Forms and Event Listeners](2_FormsAndEventListeners.md)