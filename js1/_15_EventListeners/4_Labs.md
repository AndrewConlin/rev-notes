### Labs
0: Create an HTML file named `listen.html` and a JavaScript file named `listen.js`  
  
1: Write a well formed HTML document in `listen.html` and add an `<h1>` that says 'hello world'.  
  
2: Import your `listen.js` file into your `listen.html` file using `<script src=''></script>`  
  
  
3: Add an unordered list of 5 list items to the HTML (don't put any text between the `<li>`s)  
  
4: Next to each of the list items, place a button with the text 'Edit' on it.  
  
5: In your `listen.js` file, assign a 'click' event listener to each of your 'Edit' buttons.  
  
6: When the 'Edit' button is clicked, it should use a `prompt` to prompt the user for a new value to place in that list item.  
  
7: When the user enters a new value for the list item, select the list item, and change it's `textContent` to match the entered text.  
  
8: Add another button next to each of the 'Edit' buttons, this one should have 'Delete' on it.  
  
9: Assign event listeners to each of the 'Delete' buttons that will use `confirm` to confirm that the user wishes to delete the item. If the user affirms to the deletion, use `textContent` to clear the corresponding list item's value, otherwise, don't change the value.  
  
10: Remove the 'Edit' buttons from your markdown (not the event listeners from your JS). Set the 'Edit' event listeners to listen for a click on the list item instead. Refactor your code to update the text on the item with `Event.target` instead of reselecting it.

#### Back to [Table of Contents](../README.md)