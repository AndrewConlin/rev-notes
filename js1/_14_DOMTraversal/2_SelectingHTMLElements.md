### Selecting HTML Elements
* The `Document` makes selecting HTML elements relatively easy.
  
* HTML elements in the DOM can be accessed by:
  * Tag name: `document.getElementsByTagName(str)`
  * ID: `document.getElementById(str)`
  * Class name: `document.getElementsByClassName(str)`
  * Selector: `document.querySelector(str)`, `document.querySelectorAll(str)`

```html  
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <p>para 1</p>
        <p>para 2</p>
        <p>para 3</p>
        <p>para 4</p>
        <p>para 5</p>

        <ul class="list">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
        </ul>

        <div id='mainContent'>
            <div id='subContent'>
                <div id='nestedContent'></div>
            </div>
        </div>

        <script type="text/javascript">
            var paragraphs = document.getElementsByTagName('p');
            var mainContent = document.getElementById('mainContent');
            var list = document.getElementsByClassName('list');
            var firstPara = document.querySelector('p');
            var allItems = document.querySelectorAll('li');

            console.log('paragraphs');
            console.log(paragraphs);

            console.log('mainContent');
            console.log(mainContent);

            console.log('list');
            console.log(list);

            console.log('firstPara');
            console.log(firstPara);
            
            console.log('allItems');
            console.log(allItems);
        </script>

    </body>
</html>
```
  
```bash
*****paragraphs*****
[p, p, p, p, p]

*****mainContent*****
div#mainContent

*****list*****
[ul.list]

*****firstPara*****
p

*****allItems*****
[li, li, li, li, li]
```
  
* It is important to note that the items above that look like `Array`s are not actually `Array`s, they are `HTMLCollection`s. These are `Array`-like-objects that can be iterated over, but which do not have access to the the `Array` methods.
  
* With elements selected we can access the properties associated with them.
  
* For example, we can access the text within an HTML element with `.textContent`:
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Some Page</title>
    </head>
    <body>
        <p>para 1</p>
        <p>para 2</p>
        <p>para 3</p>
        <p>para 4</p>
        <p>para 5</p>

        <script type="text/javascript">
            var firstPara = document.querySelector('p');

            console.log('Text Content: ' + firstPara.textContent);
        </script>

    </body>
</html>
```
  
```bash
Text Content: para 1
```
  

#### Continue to [3 - UsingSelectedElement](3_UsingSelectedElement.md)