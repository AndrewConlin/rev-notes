### Employee Menu

#### Application Overview

We are going to build an Employee management application. The assumption is that our user is an employee (possibly a manager) who needs to keep track of who is working for them (names).

You will see this exercise again, we will rebuild it and refactor it as we learn new technologies and methodologies.

#### Learning Objectives
* Present a simple user interface in command-line
* Continuous loops
* How to use datatypes: Arrays
* Use of conditionals, both if/else and switch
* Following [DRY][dry] principles with the help of methods

##### User Story #1

When the application runs, a menu should be presented to the user with four options: 
* List Employees
* Hire Employee
* Fire Employee
* Quit

##### User Story #2

When 'List Employees' is selected all of the employees names should be displayed to console.

##### User Story #3

When 'Hire Employee' is selected, the user should be prompted to enter the name of a new employee, this employee should be saved.

##### User Story #4

When 'Fire Employee' is selected, the user should be prompted to select an employee, this employee should be removed from the list of employees

##### User Story #5

After the user selects 'List Employees', 'Hire Employees', or 'Fire Employees', the menu will be presented to the user again, and whatever data was changed should persist (i.e. if the user just 'Hired' a new employee, if they select 'List Employees' that employee should now appear in the list).

##### User Story #6

The user can quit the program by selecting 'Quit', they will be shown a message "You have successfully quit the program", and the program will exit.

#### Stretch Goals

* Can you refactor your code into methods? Can you only call one method in your main and have your program run successfully? Give it a shot.
* Add more options to the menu. Push yourself: can you add a salary to each employee? How would you go about this? Is there another data collection type that we haven't covered that could help you out? What other features could you add to the program that the manager might find useful?

[crud]:https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
[dry]:https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
