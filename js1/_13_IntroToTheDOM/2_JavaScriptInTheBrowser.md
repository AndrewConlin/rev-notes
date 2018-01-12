### JavaScript in the Browser
* JavaScript can be written in HTML markdown between `<script></script>` elements.
  
```html
<!-- some_page.html-->
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>
        <h1>Hello World</h1>

        <script type="text/javascript">
        	var message = 'Loading page';
            alert(message + ' Hello World');
        </script>

    </body>
</html>
```
  
* JavaScript written in HTML implicitly references the `Window` global object. `Window` is the top level object that was created with the DOM by the browser when the web page loaded. All methods and values used in client side JavaScript are properties, or descendant properties of the `Window` object.
  
* As an alternative to writing JavaScript directly into HTML markdown, you can reference external JavaScript files, making your JS available to more than one file and de-cluttering your markdown.
  
* To import JS from a file, use `<script src='fileName.js'></script>`:
  
```html
<!-- some_page.html-->
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>
        <h1>Hello World</h1>

        <script src='fileName.js'></script>
        	

    </body>
</html>
```
```javascript
// fileName.js
var message = 'Loading page';
alert(message + ' Hello World');
```
  
