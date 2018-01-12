### Labs

#### 1: FORMS
0: Create an HTML file named 'manipulate.html', create a JS file named 'manipulate.js'
  

1: Write a form named 'contact' in HTML with the following inputs (all are type='text' except where noted):
  * fname
  * lname
  * email => email
  * street
  * city
  * state
  * zip
  * Add Shipping => submit
  

2: In your JS file select the form, and add an Event Listener to it's submit which prevents default.
  

3: Print out each of the submitted form values from the event listener and ensure that you are capturing them correctly.
  
  
4: In your JavaScript file, create a function named `verifyFormData(fname,lname,email,street,city,state,zip)` which:
  * Checks that all of the values are completed (i.e. not blank)
  * That the email address contains an `@` (feel free to check this with regex instead)
  * That the zip can be converted to a number and is 5 characters long
  * That state is two characters long
  * if any of the above verifications fail, the function should throw an error explaining the problem (you can just return a string if you wish which explains the problem) (i.e. `'Zip code must be composed of 5 numbers'`)
  * if the data is valid, return `true`
  
  
5: Call `verifyFormData()` in your event listeners callback, pass it your form data.
  

6: If `verifyFormData()` returns `true`, clear the form (i.e. remove it), and display the data to the screen.
  

7: If `verifyFormData()` returns a `string`, do not clear the form, instead, present the error to the user below the form. (You could refactor `verifyFormData()` to return an array of strings, and then display them in a list below the form instead)
  

BONUS!: Create a module (using the revealing module pattern), in the same JS file. The module should:
  * Be stored in a variable named 'person' (i.e. `var person = (function(){});`)
  * Store the following arguments in variables after type checking:
    * `fname` => string
    * `lname` => string
    * `email` => string
    * `street` => string
    * `city` => string
    * `state` => string, not more than two characters long
    * `zip` => number, no longer than 5 digits
  * Expose a method named `getShippingDetails()` which returns an object with all of the variables

Pass the verified form data to the module, and use the `getShippingDetails()` method to return an object which you use to display the user data.
  
  
#### 2: Create a table dynamically
0: Create an HTML file named 'table.html', create a JS file named 'table.js'
  
  
1: Create a button with the text 'List States'.
  

2: Add an event listener to the 'List States' button that dynamically builds a table with the following data (don't forget to add headers):

```javascript
var usStates = [
    { name: 'ALABAMA', abbr: 'AL'},
    { name: 'ALASKA', abbr: 'AK'},
    { name: 'AMERICAN SAMOA', abbr: 'AS'},
    { name: 'ARIZONA', abbr: 'AZ'},
    { name: 'ARKANSAS', abbr: 'AR'},
    { name: 'CALIFORNIA', abbr: 'CA'},
    { name: 'COLORADO', abbr: 'CO'},
    { name: 'CONNECTICUT', abbr: 'CT'},
    { name: 'DELAWARE', abbr: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbr: 'DC'},
    { name: 'FEDERATED STATES OF MICRONESIA', abbr: 'FM'},
    { name: 'FLORIDA', abbr: 'FL'},
    { name: 'GEORGIA', abbr: 'GA'},
    { name: 'GUAM', abbr: 'GU'},
    { name: 'HAWAII', abbr: 'HI'},
    { name: 'IDAHO', abbr: 'ID'},
    { name: 'ILLINOIS', abbr: 'IL'},
    { name: 'INDIANA', abbr: 'IN'},
    { name: 'IOWA', abbr: 'IA'},
    { name: 'KANSAS', abbr: 'KS'},
    { name: 'KENTUCKY', abbr: 'KY'},
    { name: 'LOUISIANA', abbr: 'LA'},
    { name: 'MAINE', abbr: 'ME'},
    { name: 'MARSHALL ISLANDS', abbr: 'MH'},
    { name: 'MARYLAND', abbr: 'MD'},
    { name: 'MASSACHUSETTS', abbr: 'MA'},
    { name: 'MICHIGAN', abbr: 'MI'},
    { name: 'MINNESOTA', abbr: 'MN'},
    { name: 'MISSISSIPPI', abbr: 'MS'},
    { name: 'MISSOURI', abbr: 'MO'},
    { name: 'MONTANA', abbr: 'MT'},
    { name: 'NEBRASKA', abbr: 'NE'},
    { name: 'NEVADA', abbr: 'NV'},
    { name: 'NEW HAMPSHIRE', abbr: 'NH'},
    { name: 'NEW JERSEY', abbr: 'NJ'},
    { name: 'NEW MEXICO', abbr: 'NM'},
    { name: 'NEW YORK', abbr: 'NY'},
    { name: 'NORTH CAROLINA', abbr: 'NC'},
    { name: 'NORTH DAKOTA', abbr: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', abbr: 'MP'},
    { name: 'OHIO', abbr: 'OH'},
    { name: 'OKLAHOMA', abbr: 'OK'},
    { name: 'OREGON', abbr: 'OR'},
    { name: 'PALAU', abbr: 'PW'},
    { name: 'PENNSYLVANIA', abbr: 'PA'},
    { name: 'PUERTO RICO', abbr: 'PR'},
    { name: 'RHODE ISLAND', abbr: 'RI'},
    { name: 'SOUTH CAROLINA', abbr: 'SC'},
    { name: 'SOUTH DAKOTA', abbr: 'SD'},
    { name: 'TENNESSEE', abbr: 'TN'},
    { name: 'TEXAS', abbr: 'TX'},
    { name: 'UTAH', abbr: 'UT'},
    { name: 'VERMONT', abbr: 'VT'},
    { name: 'VIRGIN ISLANDS', abbr: 'VI'},
    { name: 'VIRGINIA', abbr: 'VA'},
    { name: 'WASHINGTON', abbr: 'WA'},
    { name: 'WEST VIRGINIA', abbr: 'WV'},
    { name: 'WISCONSIN', abbr: 'WI'},
    { name: 'WYOMING', abbr: 'WY' }
];
```
  
3: When the table is written, replace the 'List States' button with a 'Clear States' button that removes the table and replaces the 'List States' button


#### Back to [Table of Contents](../README.md)
