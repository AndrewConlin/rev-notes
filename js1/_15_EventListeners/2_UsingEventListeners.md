### Using Event Listeners
* There are a large number of events that you can observe and use, a full list can be found on MDN: [Events][mdn]
  
* One of the most common uses for event listeners is to observe 'click' events from users:
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>
        <button id='btn'>My Button</button>
        
        <script type="text/javascript">
            // Store the button element in a variable
            var btn = document.getElementById('btn');

            // Assign an event listener to a click event on the button
            btn.addEventListener('click', function(e) {
                console.log('CLICKED!');
            });
        </script>
    </body>
</html>
```
  
* The above example illustrates how you can add a 'click' event listener to a `<button>` element. Each time the user clicks the button, it will fire the anonymous function, and print 'CLICKED!' to the console.
  
#### `alert()`, `confirm()`, `prompt()`
* The easiest way to take user input (for now), is to use `alert()`, `confirm()` and `prompt()`. These are methods on the Window object that will create popup windows and either present the user with information or ask for their input.
  
* Let's use these to practive event listeners:
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>
        <button id='btn'>Request Information</button>

        <h3></h3>

        <script type="text/javascript">
            var btn = document.getElementById('btn');

            // create event listener
            btn.addEventListener('click', function(e) {

            	// store boolean in response variable
                var response = confirm('Would you like to receive our newsletter?');

                // if 'ok'
                if (response) {
                	// prompt user to enter email
                    var email = prompt('Enter your email');
                    // popup message success
                    alert('You will now receive our newsletter to ' + email);
                } else {
                	// popup message failure
                    alert('Sorry, the newsletter is the only information available');
                }
            });
        </script>
    </body>
</html>
```
  


#### Continue to [3 - Event Object](3_EventObject.md)



[mdn]:https://developer.mozilla.org/en-US/docs/Web/Events