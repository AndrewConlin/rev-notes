### TS Jets

...does this sound familiar???

#### Application Overview
You are going to create a fleet of jets!..in the browser...with TypeScript!...your application will be a menu to access information about your jets.

As you work through the user stories think about what ***CLASSES*** you will need (it's probably more than you think) before your start writing code.

I'm adding more stretch goals this week as User Stories for you to get some more OO practice with TypeScript.

#### Structure
A `Jet` must have a `model`, `speed`, `range`, and `price` associated with it. The speed should be taken in MPH but displayed to the user in Mach.

Mach is measured through various calculations which take into consideration air density etc...for our use case, let's assume each mack is 767mph. (i.e. mach 2 would be 1534mph).

For those of you that are having trouble getting started, we have provided you with a potential UML diagram [here](UMLJets.png).

#### User Story #1
There is a menu with 5 options:
1. List fleet  
2. View fastest jet  
3. View jet with longest range  
4. Add a jet to Fleet  
5. Quit  

#### User Story #2
List fleet prints out the model, speed, range, and price of each jet. (There must be at least 5 jets stored when the program starts).

#### User Story #3
The view fastest jet and longest range options both print out all of the information about their jets.

#### User Story #4
Quit exits the program.

#### User Story #5
A user can add custom jets to the fleet.

#### Stretch Goals

#### User Story #6
Each jet has a pilot

#### User Story #7
Assign a random pilot to each jet that is created

#### User Story #8
Users can hire pilots

#### User Story #9
Whenever a jet's information is displayed, that jet's pilot and his/her information should also be displayed


### Grading
This is a graded project. You are expected to have your project completed by the start of class on Monday morning.

You will be given either a pass or fail based on whether your code works given all of the following test conditions:

* When menu option 1 is pressed all Jets in the fleet are displayed to the user.
* When menu option 2 is selected, the fastest jet from the list of Jets should be displayed to the user.
* When menu option 3 is selected, the jet with the longest range should be displayed to the user.
* When option 4 is pressed you should be prompted to enter the model, speed (in MPH), range, and price. This Jet should be added to the list of Jets so that when the user again selects menu option 1, that custom jet is included.
* Option 5 should exit the program.

If the project does work with all of the above test conditions, you will be given a 1 for this week's project.

If the project does not work with the above test conditions, you will be given a 0 for this week's project.

If you get a zero on the project, you can upgrade to a score of .5 if you turn in a working project by the start of class on the following Monday morning AND notify an instructor that you wish to get partial credit.

To turn in a project, you must push it to GitHub. You must include a README.md that describes how to run your program.
