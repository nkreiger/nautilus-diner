

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

function speakGoodBye (name) {
  console.log("Good Bye" + " " + name);
}

function speakHello (name) {
  console.log("Hello" + " " + name);
}

for (var i = 0; i < names.length; i++) { 
var letter = names[i];
var first_letter = letter.charAt(0);
var result = "";
if ((first_letter == ("j")) || (first_letter == ("J"))) {
  speakGoodBye(letter);
}
else {
  speakHello(letter);
}

}
