function Person(lname, fname, gender, age) {
	this.lastname = (typeof lname === 'string') ? lname : '';
	this.firstname = (typeof fname === 'string') ? fname : '';
	this.gender = (typeof gender === 'string') ? gender : '';
	this.age = (typeof age === 'number') ? age : 0;

	Person.count = (typeof Person.count === 'number') ? (Person.count + 1) : 1;

	Object.defineProperty(
		this, 
		'ID',  
		{
			value : (Person.count + 1000),
			writable : false,
			enumerable : true
		}
	)

	Person.species = 'Human';

	Person.displayStats = function(person) {
		for (p in person) {
			console.log(person[p]);
		}
	}
}

function listHumans(arr) {
	for (var i = 0 ; i < arr.length ; i++) {
		if (arr[i] instanceof Person) {
			Person.displayStats(arr[i]);
		}
	}
}

var p = new Person('Kane', 'Kris', 'm', 29);
var p1 = new Person('Conlin', 'Andrew', 'm', 25);
var p2 = new Person('Frock', 'Cole', 'm', 32);

// listHumans([p,p1,p2]);


// console.log(p);
// console.log(Person.species);
// Person.displayStats(p);

// listHumans([p,p1,p2]);


function Product(name, description, price) {
	Product.count = (typeof Product.count === 'number') ? (Product.count + 1) : 1;
	
	this.name = (typeof name === 'string') ? name : '';
	this.description = (typeof description === 'string') ? description : '';
	this.price = (typeof price === 'number') ? price : 0.0;
	this.sku = Product.count + 1000;
}

function Inventory() {

	this.stock = [];
		/* { 
			product : {
				name : 'Chair',
				sku : 1001,
				price : 28.82,
				description : 'sit on it'
			}, 
			quantity : 6
		} */

	this.addToInventory = function(product, quantity) {
		this.stock.push({
			product : product, 
			quantity : quantity
		});
		console.log('Added ' + quantity + ' ' + product.name + ' to inventory');
	}

	this.checkInventory = function(name) {
		for (var i = 0 ; i < this.stock.length ; i++) {
			if(this.stock[i].product.name === name) {
				console.log('There are: ' + this.stock[i].quantity + ' ' + name + ' in inventory');
			}
		}
	}

	this.removeSoldProducts = function(name, quantity) {
		for (var i = 0 ; i < this.stock.length ; i++) {
			if(this.stock[i].product.name === name) {
				this.stock[i].quantity -= quantity;
				console.log('Sold ' + quantity + ' ' + name);
				console.log('New ' + name + ' quantity is: ' + this.stock[i].quantity);
			}
		}
	}
}

function Store() {
	this.inventory = new Inventory();
	this.totalSales = 0.0;

	this.sell = function (id, quantity) {
		var saleTotal = 0;
		for (var i = 0 ; i < this.inventory.stock.length ; i ++) {
			var currentItem = this.inventory.stock[i].product;
			if (currentItem.sku === id) {
				saleTotal = (quantity * currentItem.price);
				this.totalSales += saleTotal;
				console.log('Sold ' + saleTotal + ' worth of ' + currentItem.name);
				break;
			} 
		}


	}
}

var p = new Product('Chair','Sit on this', 50.5);

// console.log(p);

var i = new Inventory();

// i.addToInventory(p, 95);
// i.checkInventory('Chair');
// i.removeSoldProducts('Chair', 27)

var s = new Store();

// s.inventory.addToInventory(p, 80);
// s.sell(1001, 20);

// i.addToInventory(p, 5);
// i.checkInventory('Chair');
// i.removeSoldProducts('Chair', 2);

// s.inventory.addToInventory(p, 29);
// console.log(s.totalSales)
// s.sell(1001, 5);
// console.log(s.totalSales)



// console.log(i.stock);

// var obj = { name: 'obj name' };

// console.log(obj['name']);



