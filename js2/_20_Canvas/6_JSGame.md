# JS Game
### Overview
The goal this week is to make a SIMPLE!!!! Game using JavaScript.

### Inspiration
* [Lights Out][lights]
* [Snake][snake]
* A timed quiz game which records score based on a combination of time spent answering questions and questions answered correctly.

### Minimum Requirements
Your game must have the following components.  
1: A RESTful Java backend which persists (at a minimum), player scores and names.  
  * When someone completes your game (win or lose) you will display the top 10 scores (with player names).  
  * Players should be able to view all scores and see the score records of every player from your database.  
 
2: An event driven JavaScript game. Be it clicks, key press, or mouseover, the player should be required to interact with your game. When that interaction takes place it should cause some sort of change (pip moves, tile changes color, answer is selected/submitted). On interaction you should have logic that checks to see if the game is complete (player won or loss, quiz ended, etc).  
3: A timer. The score for your game should involve (if not be entirely reliant upon) the amount of time it takes to complete it. When your game begins, the timer should start. When the game is complete your timer should stop. Display your timer on the screen for the player as they are playing the game (makes things more stressful).  
4: Track score. Your JS game should have some kind of a score. This could just be the time, or it could be the number of pips eaten, or the number of answers answered correctly etc divided by the time. You can 'arcadify' the score (multiply it by 1000) if you so choose.  
5: DOM manipulation. Obviously you are going to be changing the DOM based on user input. However, you do not have to create all HTML elements with JS. Build as much as you can/wish staticly with HTML and only change the elements that need to be altered/updated with your JS.  
6: XMLHttpRequest. At the very least you are going to need get and create scores. If you are making a quiz game, you will need to get considerably more (i.e. a quiz, questions, answers etc). Be sure to route RESTfully!!!

### Where Do I Start?
**Track it with Git.**  
  
Inevitably, disastrously...at some point you will make a change, or try to implement some feature to your game that just shatters everything. Nothing will work, you will face hours of debugging to get it to a working state. Avoid this, by tracking it with Git and committing often. If something goes awry, just roll back to the last place it worked.  


**Decide on a game to create.**  
  
It is tempting to do something complex with a lot of functionality, but you don't have a ton of time, and I guaruntee that this will be harder then it seems. Pick something simple to start, if you knock it out quickly, spend time either increasing functionality or making it prettier.  
  
**Java Dynamic Web**  
  
Get your backend working. Configure everything. Pull a test object all the way from your database to your view. Make sure you can send JSON. No JS yet. A firm foundation is key.  
  
**Create your JS File**  
  
Make sure that your `onload` can print "LOADED" when the page loads, and that a button will print "Clicked" when clicked.  
  
**Deploy a .war to AWS**  
  
Deploy early and often. Just because it works locally doesn't mean it works in the cloud. Get it up on AWS to start and troubleshoot any configuration issues now, later you will know that if something in your deployed version is breaking, it isn't your config.  
  
**Start on game logic**  
  
Don't try do do everything at once. If your game has a board. Create the board first. Then create the elements within it...THEN...and only then...give them functionality and event listeners. Once you've got your game logic working (and know when the game ends - *deceptively tricky*), and send the score to your Java application to persist.  
  

### Resources
NOTE: Both of the Eloquent JS resources below could be useful resources in terms of approach, but please do not recreate them 1-for-1, we expect you to create your game from scratch. It is alright if your game is relatively simple, the goal is not to create the next Minecraft, it is to practice your JavaScript.
* [Eloquent JS ch. 7: Electronic Life][ch7]
* [Eloquent JS ch. 15: A Platform Game][ch15]
* [MDN][mdn]




[ch7]:http://eloquentjavascript.net/07_elife.html
[ch15]:http://eloquentjavascript.net/15_game.html
[mdn]:https://developer.mozilla.org/en-US/docs/Web/JavaScript
[lights]:https://en.wikipedia.org/wiki/Lights_Out_(game)
[snake]:https://en.wikipedia.org/wiki/Snake_(video_game)
