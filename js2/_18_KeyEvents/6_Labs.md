### Labs
0: Create files named keylogger.js and keylogger.html  
  
1: Create an eventlistener that prints the word 'Down' to console when a 'keydown' event is observed  
  
2: Refactor your eventlistener from #1 to print the keyboard character that was pressed.  
  
3: Refactor your eventlistener from #2 to not print anything if a non-character value was pressed. (make sure that they are lowercase by default)  
  
4: Refactor your eventlistener from #3 to observe spaces (i.e. add an empty space when the spacebar was pressed).  
  
5: Now that you can observe character key presses, and spacebar presses, display them to the web page as they are pressed. Write a function that takes a string (the character pressed), selects a div on the page, and appends the character to the end fo the text content of the div on each keydown event.  

BONUS: Refactor your solution to account for capitalization with 'shift'. If 'shift' is pressed at the same time as a letter character, print the capitalized character to the screen.  
  
BONUS2: Refactor your solution to keep track of caps lock. If caps lock is toggled on, all characters should be capitalized...if not, then they should be lower case.  
