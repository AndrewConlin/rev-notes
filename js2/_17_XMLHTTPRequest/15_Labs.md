### Labs
**Overview**: Now that you know how to implement PUT/POST/DELETE, let's add full CRUD to you Snow Fall application.
  

1: It is usually a good idea to start with a CREATE method. Add a button to your `index.jsp` labeled 'Create Resort'.
  

2: Create a route in your controller that will create a new Resort object from the JSON sent to that route. This route should be mapped to `rest/resorts` and be a 'POST' method. The method should return the created object.
  

3: Create an event listener for the button you created in #1. When clicked, present a form with 3 input fields: Name, Snow depth, Number of Lifts. The submit button should have an event listener.
  

4: When the form in #3 is submitted, verify the form data is correct. If it is, send an XMLHttpRequest to the controller route you created in #2 and clear the form. The callback should take the response object (the resort), and append it to the table of resorts.  
  
5: Add an 'Edit' button to the your Resort table creation (i.e. each Resort should have it's own edit button in a new column).  
  
6: Add an event listener to the button you created in #5. When clicked, create a form with three fields. Populate the form with the existing Name, Snow Fall, and Chair Lifts values for that resort.
  
7: Create a route in your controller that will modify a resort object's values. The method should map to `rest/resorts/{name}`, be a 'PUT', and should respond with an updated resort object as JSON.
  
  
8: Add an event listener to the submit button from the form in #6. Validate the inputs, if valid, send an XMLHttpRequest to the route from #7. When the response returns, update the Resort in the table.
  

9: Finally, add a 'Delete' button to your Resort table creation (i.e. each Resort should have it's own delete button in a new column).
  

10: Add an event listener to the button you created in #9. When clicked, fire a `confirm()` that checks if the user is sure they wish to delete the resort.
  

11: Create a route in your controller that will delete a Resort from your Map. The method should map to `rest/resorts/{name}` and be a 'DELETE'. If successful, the response should be `true`, otherwise, it should be `false`.  
  
12: Update the event listener from #10. If the user affirms that they wish to delete the resort, use an XMLHttpRequest to send the resorts name to the delete route you created in #11. If the response is true, remove the resort from the table.
  
#### Continue to [16 - Create a XMLHttpRequest Module](16_CreateXHRModule.md)