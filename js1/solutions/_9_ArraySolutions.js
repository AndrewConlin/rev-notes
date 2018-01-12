// 1
var Orchard = function() {
	this.trees = [];
};

// 2
var orch = new Orchard();

// if (orch.trees instanceof Array) {
// 	console.log('Yes, it is an Array');
// }

// 3
var Tree = function(age,type) {
	this.age = (typeof age === 'number') ? age : 0;
	this.type = (typeof type === 'string') ? type : 'Apple';
};

//4
// Create 'Apple' Tree objects
var apple1 = new Tree(5);
var apple2 = new Tree(9);
var apple3 = new Tree(87);
var apple4 = new Tree(56);
var apple5 = new Tree(23);

// Create 'Orange' Tree objects
var orange1 = new Tree(5, 'Orange');
var orange2 = new Tree(9, 'Orange');
var orange3 = new Tree(87, 'Orange');
var orange4 = new Tree(56, 'Orange');
var orange5 = new Tree(23, 'Orange');

// 'Push' all of the Tree objects to the orchard.trees array
orch.trees.push(apple1);
orch.trees.push(apple2);
orch.trees.push(apple3);
orch.trees.push(apple4);
orch.trees.push(apple5);
orch.trees.push(orange1);
orch.trees.push(orange2);
orch.trees.push(orange3);
orch.trees.push(orange4);
orch.trees.push(orange5);

// console.log(orch.trees.length === 10); // true

//5
Orchard.prototype.displayByType = function(type) {
	return this.trees.filter(function(x){
		return x.type === type;
	});
};
// Test 5
// console.log(orch.displayByType('Apple'));


//6
Orchard.prototype.sortByAge = function() {
	return this.trees.sort(function(a,b){
		return b.age - a.age;
	});
};
// Test 6
// console.log(orch.sortByAge());


//7
Orchard.prototype.totalAge = function(){
	var ages = [];
	this.trees.forEach(function(val){
		ages.push(val.age);
	});
	return ages.reduce(function(x,y) {
		return x+y;
	});
};
// Test 7
// console.log(orch.totalAge());


//8
Orchard.prototype.ageOneYear = function() {
	this.trees.map(function(x){
		return x.age++;
	});
	return this.trees;
};
// Test 8
// console.log(orch.ageOneYear());


//9
Orchard.prototype.getOldestTrees = function() {
	return this.sortByAge().slice(0,5);
}
// Test 9
// console.log(orch.getOldestTrees());

//10
Orchard.prototype.purgeTrees = function(type) {
	var orch = this;
	var treesToPurge = orch.displayByType(type);
	var counter = 0;

	treesToPurge.forEach(function(val,ind,arr) {
		var indexOfTreeToPurge = orch.trees.indexOf(val);

		if (indexOfTreeToPurge > 0) {
			orch.trees.splice(indexOfTreeToPurge,1);
			counter ++;
		}
	});

	console.log('Purged ' + counter + ' ' + type + ' trees');
	return orch.trees;
}
// Test 10
// console.log(orch.purgeTrees('Orange'));

// BONUS!
// # 10 is a hard version of something simpler.
// Filter makes this a breeze:

/*
Orchard.prototype.purgeTrees2 = function(type) {
	this.trees = this.trees.filter(function(x){
		return x.type !== type;
	})
	return this.trees;
};

console.log(orch.purgeTrees2('Orange'));
*/
