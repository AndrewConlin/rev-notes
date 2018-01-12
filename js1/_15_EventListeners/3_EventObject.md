### Event Object
* When an event listener is triggered, the callback function is passed the Event object.
  
* The Event object is created when the event occurs and has properties pertaining to the event:
  * `timestamp`: when the event was created
  * `type`: the type of event
  * `target`: the target to which the event was originally dispatched.
  * etc etc
  
* This last property is particularly useful as it contains a reference to the object that triggered the event. In the case of a button click event, the target will be the button.
  
* `target` allows us to access the properties and effect the properties of the `target` object in the callback.
  
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
            btn.addEventListener('click', function(e) {
                e.target.textContent = 'This Button Has Been Clicked';
            });
        </script>
    </body>
</html>
```
  
* Now, when the button is clicked, it will change the text on the button to 'This Button Has Been Clicked'
  


#### Continue to [4 - Labs](4_Labs.md)