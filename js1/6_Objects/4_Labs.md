### Labs

0: Create a file named 'object.js'  
  
1: Create an object that models a person with the following fields:
  * `id`
  * `lastName`
  * `firstName`
  * `gender`
  * `age`
  
2: Add methods to the person object from #1.
  * `obj.display()` should log each of the properties and their value (`id: 8902`) to the console.
  * `obj.getFullName()` should log the person's full name (`Bob Dobbs`)

3: Create a new object in a variable named school and initialize it with as a new object. Use the object you created in #1 and make three more (albeit different) people, store them in variables named after the person's first name. Assign a number of 'students' as properties to school using their first names as properties.  
  
4: Modify your 'students' from #3 to have a `gpa` property, which is an array of floats.  
  
5: Modify your 'school' from #3 to have a `computeGPA(person)` function. `computeGPA` should return the GPA of a student object.
  
6: Modify your 'school' from #3 to have an `expelStudent(person)` method. If a student's computed gpa is less then 2.0 (50%), remove them from the school object (use the `delete` operator to remove a property).

#### Back to [Table of Contents](../README.md)
