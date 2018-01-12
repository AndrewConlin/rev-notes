### Labs
  
0: Create files named 'timer.js' and 'time.html'  
  
#### Part 1
1: In you html file, create a button with `id = 'click'` (just use HTML, don't bother doing this with JS)  
  
2: Add an event listener for the button, that, once clicked, will log 'clicked' in the console.  

3: Create an event listener in your js that will click the button every 2 seconds (...the `HTMLElement.click()` function will click a DOM element)  
  
```javascript
var button = document.getElementById('click');
button.click(); // => clicks the button
```
  
4: This interval will keep going and going. Add a timeout to the 'load' event listener that will clear the interval after 30 seconds.  

#### Part 2
5: Either in the same files (comment out your previous code) or new ones. Set an event listener for page load. In the listener, set a timout for 30 seconds. The timeout's function should send a 'confirm' to the user asking 'click if you are still there.'  
  
6: If the user clears the confirm by pressing 'ok', reset the timeout for 25 seconds...then 20...then 15...etc etc. If they click 'cancel', remove the timeout.  
  
#### Part 3
7: Either in the same files (comment out your previous code) or new ones. In HTML create a button with `id = 'start'` that has the text 'Start'.  
  
8: When the button is clicked, several things need to occur:
  * clear the start button, replace it's text with 'Stop'
  * start an interval which counts seconds (i.e. 1000 milliseconds)
  * display the elapsed time (seconds) to the screen as they elapse (i.e. make a stop watch)
  
9: When the 'Stop' button is pressed:
  * change the 'Stop' button text back to 'Start'
  * clear the interval
  * leave the time displayed on the screen
  
10: Add a 'Clear' button which clears the time from the screen.  
  
