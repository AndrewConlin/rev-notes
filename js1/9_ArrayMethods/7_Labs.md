### Labs
  
1: Create a new class named `Orchard`, `Orchard` should have a property named `trees` which will be an empty array when a new instance of an `Orchard` object is created.
  
  
2: Create a new instance of `Orchard`. Check if `Orchard`'s `trees` property is an array.
  
  
3: Create a new class named `Tree`, `Tree` has two properties, `age` and `type`. A new tree should have an age of `0` and a default type of `'apple'`.
  

4: Create several instances of `Tree` objects of type `'apple'` and `'orange'` and give them a variety of ages, then add them to the `Orchard`'s `trees` array.
  
  
5: Create a method on `Orchard` named `displayByType(type)`, use the `filter()` method to return a list of the specified type of trees.
  

6: Create a method on `Orchard` named `sortByAge()`, use the `sort()` method to return a sorted list of the trees from oldest to youngest.
  

7: Create a method on `Orchard` named `totalAge()`, use the `reduce()` method to return the total age of all of the trees.
  

8: Create a method on `Orchard` named `ageOneYear()`, use `map()` to increment the age of each tree by one.
  
  
9: Create a method on `Orchard` named `getOldestTrees()`, use your `sortByAge()` method from earlier and then use `slice()` to return a list of the 5 oldest `Tree`s
  

10: Oh no! There has been an infestation of Peruvian Orange beetles and all of the Orange trees have perished. Use your `displayByType(type)` method to return a list of all of the `orange` `Trees`. 
  

Now iterate over the `trees` with a `forEach()`, and use `splice()` in combination with `indexOf()` to remove all of the `'orange'` `Tree` objects from the `trees` array.

#### Back to [Table of Contents](../README.md)
