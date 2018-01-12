### Using a Selected Element to traverse the DOM
* Once an HTML element has been selected you can access that element's children, as well as it's parent with JS:
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>
        <ul id="list">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
        </ul>

        <script type="text/javascript">
            var list = document.getElementById('list');

            console.log(list.children.length)
            
            console.log(list.childElementCount); // essentially the same as using .length
            
            // List of child elements
            console.log(list.children)

            // One single parent
            console.log(list.parentElement)
        </script>

    </body>
</html>
```
  
```bash
5
5
[li,li,li,li,li]
<body>...</body>
```
  
* From a list of children you can select and access a single elements properties:
  
```javascript
var list = document.getElementById('list');
  console.log(list.children[0].textContent);
```
  
```bash
item 1
```
  

  
#### Continue to [4 - Labs](4_Labs.md)