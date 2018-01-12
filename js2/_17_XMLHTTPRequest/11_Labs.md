### Labs
**Overview**: You are going to use 'Snow Report' API you created on Friday. You will use XMLHttpRequest to RESTfully request resources from your API and display them to the user asynchronously.  
  
As your requests will be made from a JS file within your WebContent directory, you can use relative routes to access the data (i.e. 'rest/resorts/Copper' instead of 'http://localhost:8080/rest/resorts/Copper').  
  
0: Create an `app.js` file within your WebContent directory, and source it in your `index.jsp` file.  
  
1: Create an event listener for window load that prints out 'LOADED' when the page loads (this is a way of testing to ensure that your JS file is loading correctly):  
  
```javascript
addEventListener('load', function(){
	console.log('LOADED');
});
```
  
When you see 'LOADED' printing in your browser console, everything is loading correctly.  
  
2: Onload ('load' event listener) your `index.jsp` should access a controller route (with an XMLHttpRequest) which responds with all of your resort objects located at 'rest/resorts'. For the moment, simply print out the JSON which returns from your controller, it should be an array of JSON represenations of resort objects.
  
  
3: Refactor your solution to #2 to append all of the resorts that return to a table on your index page. The table should have four columns: Resort, Snow Fall, Chair Lifts, View (this one should have a button labeled 'View' in each cell). I.e.  
  
| Resort | Snow Fall | Chair Lifts | View |
|------|:---:|:---:|---|
|Copper|83|13|View|
|etc...|etc...|etc...|View|  

  
4: Refactor your solution to #3 to display the data in the table sorted by Snow Fall (from most snow fall to least snow fall...hint: use `Array.sort()`).  
  
5: Refactor your solution to #4 to add an event listener to each of the 'View' buttons. For now, when the button is clicked have it print the name of the resort in it's column.  
  
6: Now that you have the name of the resort returning correctly, refactor the eventListener from #5 to make an XMLHttpRequest which returns a single resort by name as JSON. For now, just print the returned JSON to the console.  
  
7: Refactor the XMLHttpRequest you created in #6. If a resort object returns successfully, remove the table of all resorts from the page, and display just the returned resorts information. The resort name should be an `<h1>`, the Snow Fall and Chair Lifts should be presented in a meaningful easily digestible way. I.e.
  
## Copper
**Snow Fall**: 83  
**Chair Lifts**: 13
  
  
8: Refactor you solution to #7, when you create the view for the resort, also create a 'List Resorts' button below your data. Add an Event Listener to the 'List Resorts' button which will clear the data, and call the XMLHttpRequest from previous steps which requests all the resort data, and builds and appends a table to page to display them.
  
#### Continue to [12 - PUT/POST/DELETE](12_PutPostDelete.md)