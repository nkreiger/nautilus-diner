//DOM Manipulation Part 1 and 2

/*console.log(document.getElementById("title"));

console.log(document instanceof HTMLDocument); 
*/
/*
function sayHello() {
	var name = document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>";

	document.getElementById("content").innerHTML = message;

	if (name === "student") {
		var title = document.querySelector("#title").textContent;
		title += " & LOving it!";
		document.querySelector("#title").textContent = title;
	}
} */

// innerHTMl vs textContent

// Event Handling

document.addEventListener("DOMContentLoaded", // makes it work while putting the script in the head
	function (event) {
		function sayHello(event) {
			console.log(event);
	//console.log(this); // points to window object
	this.textContent = "Said it!"; // changes button because it already points to it
	var name = document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>";

	document.getElementById("content").innerHTML = message;

	if (name === "student") {
		var title = document.querySelector("#title").textContent;
		title += " & LOving it!";
		document.querySelector("#title").textContent = title;
	}
}
document.querySelector("button").addEventListener("click", sayHello);

document.querySelector("body").addEventListener("mousemove", 
	function (event) {
		if (event.shiftKey === true) {
		console.log("x: " + event.clientX);
		console.log("y: " + event.clientY);
		}
		
	}
	);

	}
	);

/*function sayHello(event) {
	//console.log(this); // points to window object
	this.textContent = "Said it!"; // changes button because it already points to it
	var name = document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>";

	document.getElementById("content").innerHTML = message;

	if (name === "student") {
		var title = document.querySelector("#title").textContent;
		title += " & LOving it!";
		document.querySelector("#title").textContent = title;
	}
}
*/
// unobtrusive event binding's
//document.querySelector("button").addEventListener("click", sayHello);

//document.querySelector("button").onclick = sayHello;













