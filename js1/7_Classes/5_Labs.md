### Labs
  
0: Create a file named 'class.js'  
  
1: Create a `Person` class. Add parameters to the constructor for:  
  * `id` => A read only property that is assigned on creation and auto-increments with each new person  
  * `lastName`  
  * `firstName`  
  * `gender`  
  * `age`  
  * `species` => A Static property  

Be sure to type check each of the inputs and assign default values if an argument is not provided.  
  
2: Create several instances of `Person` objects from #1 and store in an array.  
  
3: Create a `displayStats(person)` method on the `Person` class that logs each of a person object's properties and values (i.e. `id: 1001`) to the console.
  
  
4: Create a global function (as in outside of your class declaration in the global scope) named `listHumans(people)` that takes an array and iterates over all indicies, calling `displayStats()` on each of the properties if they are a human.  
  
5: Create a new `Product` class. `Product`s have:  
  * `name`  
  * `sku` => Auto-incrementing number starting at `1001`  
  * `description`  
  * `price` => a float  
  
6: Create a new `Inventory` class. `Inventory` has:  
  
  * `stock` => an array of objects:  
    * the `product` property should store the name of the product class object  
    * the `quantity` property should store the number of the product that is available  
  * `checkInventory(name)` => a method that takes a `Product` name and returns the quantity of that product available  
  * `addProduct(product, quantity)` => a method that adds a product to `stock` (hint: use the Array method `.push()`)  
  * `removeSoldProducts(name, quantity)` => decrement the quantity by the `quantity` argument  
  
Be sure to type check inputs and error handle if inventory is empty!  
  
7: Create a `Store` class. `Store` has:
  
  * `inventory` => an `Inventory` class object  
  * `totalSales` => A float  
  * `sell(id, quantity)` => if an item is in inventory, add the item price (multiplied by the quantity) to the `totalSales`, then decrement the quantity of that item in inventory by the `quantity`
  
#### Back to [Table of Contents](../README.md)
