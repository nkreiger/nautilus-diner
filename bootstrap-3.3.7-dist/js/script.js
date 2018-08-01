var message = "in global";
console.log("global: message = " + message);

var a = function () {
	var message = "inside a";
	console.log("a: message = " + message);
	b();
}
function b () {
	console.log("b: message = " + message);
}

a();
// if function b is defined in a then it will be the same as a 

firstName: "yaakov",
lastName: "Chaikin",
social: {
	linkedln : "yaakoasdf",
	twitter: "yaakovcasd",
	facebook: "courseraweb"
} object is name/value pairs */ /*
var x;
console.log(x);

if (x == undefined) {
	console.log("x is undefined");
}
x = 5;
if (x == undefined) {
	console.log("x is undefined");
}
else {
	console.log("x has been defined");
}

// String concatination

var string = "Hello";
string += " World";
console.log(string + "!");

console.log(( 5 + 4) / 3 );
console.log(undefined / 5);

var x = 4, y = 4;
if (x == y) {
	console.log("x=4 is equal to y=4");
}

x = "4"; // now x is 4 as a string but type coersion keeps it legal
if (x == y) {
	console.log("x='4' is equal to y=4");
}

if (x === y) { // this takes out type coercsion
	console.log("Strict: x='4' is NOT equal to y=4");
}
else {
	console.log("not equal");
}


if (false || null || undefined || "" || 0 || NaN) {
	console.log("This line will not ever execute");
}
else {
	console.log("All false");
}

if (true && "hello" && 1 && -1 && "false") {
	console.log("All true");
}

// proper form putting curly brace on same line or it won't work with return statement
function b() {
	return {
		name: "Yaakov"
	};
}

// for loop

var sum = 0;
for (var i = 0; i < 10; i++) {
	sum = sum + 1;
}
console.log(sum);

function orderChickenWith(sideDish) {
	if (sideDish === undefined) {
		sideDish = "whatever!";
	}
	// sideDish = sideDish || "whatever!";
	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();


// Objects and Functions

var company = new Object();
company.name = "FAcebook";
console.log(company);
// company.ceo.firstName = "Mark"; // will not work need to define company.ceo

company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company Ceo first name is " + company.ceo.firstName);

console.log(company["name"]);
company["Stock of company"] = 110;

console.log("Stock price is: " + company["Stock of company"]);

// or 
var stockPropName = "stock of company";
company[stockPropName] = 110;
console.log("Stock price is: " + company[stockPropName]);



// object literal notation
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "Blue" // name value pair
	},
	stock: 110,
	"stock of company": 110
};

console.log(facebook); // Object literal is much easier and more visual

// Functions explained

function multiply(x, y) {
	return x * y;
}
// first class data type so whatever you can do with an object you can do with a function

console.log(multiply(5, 3));

multiply.version = "v.1.0.0";
console.log(multiply.version);


// function factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};

	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// passing function as arguments

function doOperationOn(x, operation) {
	return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);

// makes it powerful and flexible

// passing variables by value vs by reference
// value ex. b = a; changing by does not effect a
// passing by reference, the value changing in b effects a 
// primitives are passed by value (copied) and objects are passed by reference

var a = 7;
var b = a;
// primitives by value

var a = {x: 7};
var b = a;
b.x = 5; // since both a and b reference the same place it changes it for both
// objects by reference

function changePrimitive(primValue) {
	console.log("in changeprimitive ... ");
	console.log("before: ");
	console.log(primValue);
}

var value = 7;
changePrimitive(value);
console.log("After change: ");
console.log(value);

function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);
  
  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);

// function constructors, prototype, and the 'this' keyword

function test() {
	console.log(this); // points to all the window operators
	this.myName = "Noah";
	console.log("Hello Coursera!");
}

test();
console.log(window.myName);

function Circle (radius) {
	
	this.radius = radius;
	this.getArea = 
	function () {
		return Math.PI * Math.pow(this.radius, 2);
	};
}
Circle.prototype.getAreaUniversal =
function () {
	return Math.PI * Math.pow(this.radius, 2);
}; 

var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

// Object Literals and "This"

var literalCircle = {
	radius: 10,

	getArea: function () {
		var self = this; // to get inner to run
		console.log(this);

		var increaseRadius = function () {
			self.radius = 20; //this keyword points towards global object so it doesn't run inner
		};
		increaseRadius();
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());

// Arrays

var array = new Array();
array[0] = "noah";
array[1] = 2;
array[2] = function (name) {
	console.log("hello " + name);
};
array[3] = {course: " HTML, Css and js"};

console.log(array);

array[2]();
array[2](array[0]);

// also array literal
var names = ["Noah", "Bob", 2, {name: "Noah"}]
console.log(names);

for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}
names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}


var names2 = ["Noah", "John", "Yaakov"];

var myObj = {
	name: "Noah",
	course: "HTML",
	platform: "Coursera"
};

for (var prop in myObj) { // every property (left) in object myObj
	console.log(prop + ": " + myObj[prop]);
}
//...for (var name in names2) {...}

names2.greeting = "Hi!";

// will be included because it loops over properties 

// CLOSURES


function makeMultiplier (multiplier) {

	function b() {
		console.log("Multiplier is " + multiplier);
	}
	b();
	
	return (
		function (x) {
			return multiplier * x;
		} // multiplier is still preserved in memory on the outside because of closuers
		);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// NAME SPACING

// Lecture 52 explains having multiple scripts
// if you have two scrips with the same variable name then it will overrite the first one
// they run sequentiatly, use name spaces to fix this
// name space = creating an object, putting that variable in the object
//ex. var johnGreeter = {};
// johnGreeter.name = "John";
// johnGreeter.sayHi = function () {...}
// invoke it johnGreeter.sayHi();

// put () right after declaration to invoke immediately
/* ex. (function () {
	...
})(); 
ex with input (function () {
	...
})("name"); */
/*
1  (function(window) {
2 
3  var obj = {};
4
5  obj.dreamOn = function () {
6   console.log("I want to see the global scope! Let me out!");
7  };
8
9  window.doer = obj;
10 
11 })(window);
12
13 doer.dreamOn(); // immediate invoke */
// EVENT HANDLING
// Event handling












































