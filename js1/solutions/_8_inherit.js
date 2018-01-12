var Vehicle = function(maxSpeed, numWheels) {
	this.maxSpeed = (typeof maxSpeed === 'number') ? maxSpeed : 0;
	this.numWheels = (typeof numWheels === 'number') ? numWheels : 0;
};

/* 
	Make display dynamic with a 'for...in' as 
	child classes may have more properties
*/
Vehicle.prototype.display = function() {
	for (p in this) {
		if (typeof this[p] !== 'function') {
			console.log(this[p]);
		}
	}
};

var Bicycle = function(numGears, maxSpeed) {
	Vehicle.call(this, maxSpeed, 2);
	// this.constructor.call(this,maxSpeed,2);
	this.numGears = (typeof numGears === 'number') ? numGears : 0;
};

Bicycle.prototype = Object.create(Vehicle.prototype);

Bicycle.prototype.constructor = Bicycle;

var boat = new Vehicle(12, 0);
var plane = new Vehicle(205, 3);
var car = new Vehicle(120, 4);

var bike = new Bicycle(10, 35);
var bike1 = new Bicycle(20, 56);
var bike2 = new Bicycle(5, 20);
var bike3 = new Bicycle(1, 8);

// boat.display();
// bike.display();

var vehicles = [];
vehicles.push(boat);
vehicles.push(plane);
vehicles.push(car);
vehicles.push(bike);
vehicles.push(bike1);
vehicles.push(bike2);
vehicles.push(bike3);

// for (var i = 0 ; i < vehicles.length ; i++) {
// 	if (vehicles[i] instanceof Vehicle) {
// 		console.log('*****************');
// 		vehicles[i].display();
// 	}
// }

for (var i = 0 ; i < vehicles.length ; i++) {
	if (vehicles[i] instanceof Bicycle) {
		console.log('*****************');
		vehicles[i].display();
	}
}
