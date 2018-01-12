### Forms and Event Listeners
* Up until this point we have been using the default form behavior on submission. Namely, when the user submits a form, the data within is submitted sent as a request to some route and the response which returns dictates what should happen next.
  
* With JavaScript we need to prevent this behavior in order to use the data without page refresh.
  
* The Event object gives us a method which allows us to prevent the default behavior of the target (in this case the submit button), with a method fittingly named `.preventDefault()`
  
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
            document.myForm.submit.addEventListener('click', function(e) {
                // Don't submit the form
                e.preventDefault();

                // print out the submit buttons => parent (form) => fname input => value
                console.log(e.target.parentElement.fname.value); // Will print the user input value
                console.log(e.target.parentElement.lname.value); // Will print the user input value
            })
        </script>

    </body>
</html>
```
  
* Now that we have collected the form data (and printed it out in this example), we will want to clear the form data, this is also extremely easy using `reset()`  

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
            document.myForm.submit.addEventListener('click', function(e) {
                e.preventDefault();

                console.log(e.target.parentElement.fname.value);
                console.log(e.target.parentElement.lname.value);

                // clear the input data
                e.target.parentElement.reset()
            })
        </script>

    </body>
</html>
```
  
* Now we can clean up our code and not repeat as much by storing `e.target.parentElement` in a variable:
  
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
            document.myForm.submit.addEventListener('click', function(e) {
                e.preventDefault();

                var form = e.target.parentElement;

                console.log(form.fname.value);
                console.log(form.lname.value);

                // clear the input data
                form.reset()
            })
        </script>

    </body>
</html>
```
  

#### Continue to [3 - Dynamically Creating Elements](3_DynamicallyCreatingElements.md)