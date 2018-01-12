# JS Racer
### Application Overview
It's time to dip a toe into the world of games. Albeit a very tiny toe.  
  
You are going to build a simple racing game that moves some "cars" (colored divs) accross the screen. It'll even be a multi-player game as each player will be able to hit their own key to make their dive move.

### Release 1 - Listen for keydown
1. Create an HTML file with two `div` elements ('car1', 'car2').
2. Use CSS to make one of them blue and the other red. And both of them 20px x 20px.
3. Add a `keydown` event listener, for now just print a test to the console when a key is pressed.
4. Create a function which checks which key was pressed. If the `p` key was pressed move the blue car, and if the `q` key was pressed you'll move the red car. For the time being, just print "blue" or "red" depending on which key was pressed.

### Release 2 - Move the cars
1. Create a funciton named "moveCar" which will be called by your "selectCar" function. Pass this function the `div` that corresponds to the key that was pressed and the event from the key press.
2. Use the marginLeft style property to "move" the corresponding `div` accross the screen when it's key is pressed.
3. Don't forget to use the `window.screen` object to check for a winner when one of the cars is close to the end of the screen. When one of the cars reaches the gate, display which user has won on the screen.

### Release 3 - Make it better
4. As a starting point, replace the colored `div`s with actual images of cars (or horses, dragons, what have you).
5. Do anything else you can think of to spruce up this relatively simple game. Maybe add some more players/key events, or a finish line etc.
