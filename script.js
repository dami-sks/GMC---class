// const payment = confirm("Are you ready to make payment?");
// if (payment) {
//   console.log("Proceed to payment portal");
// } else {
//   console.log("Payment process cancelled");
// }

// Prompt

// const age = parseInt(prompt("How old are you? "))

// if (age>=18){
//     console.log("Welcome to the bar!")
// }else{
//     alert("It's like you'll go home")
// }

// function greetings (user = "baddie"){
//     console.log("welcome", user)
// }
// greetings("Solomon")
// greetings("Zainab")
// greetings()

// function add(num, boo = 1){
//     return num*boo
// }
// console.log(add(7,3))

// // MY ASSIGNMENT

// const age = parseInt(prompt("Please enter your age."));

// //conditionals
// if (age <18) {
//   console.log("You're not eligible. Please around. Thank you!");
// }
// else if (age >=18 && age<=25) {
//   console.log("No rush, my guy. Take your time");

// }
// else if (age >25 && age<=30) {
//   console.log("Don't you think you should be serious?");

// }
// else if (age >31 && age<=40) {
//   console.log("Try to find love");

// }
// else if (age >41 && age<=50) {
//   console.log("Wdym you're still single??");

// }
// else {
//   console.log("All the best");
// }

// //template strings
// var namey = "lucy"
// console.log(`Yo, ${namey}`);

// //function declaration
// function functionName (param1,param2...paramN){
//   //block of Javascript code
// }

// Problem statement to try out switch with

// var number = parseInt(prompt("Enter a number from 1-7"));

// switch (number) {
//   case 1:
//     console.log("You're assigned to Sunday");
//     break;

//   case 2:
//     console.log("You're assigned to Monday");
//     break;

//   case 3:
//     console.log("You're assigned to Tuesday");
//     break;

//   case 4:
//     console.log("You're assigned to Wednesday");
//     break;

//   case 5:
//     console.log("You're assigned to Thursday");
//     break;

//   case 6:
//     console.log("You're assigned to Friday");
//     break;

//   case 7:
//     console.log("You're assigned to Saturday");
//     break;

//   default:
//     alert("Please enter a number from 1-7");
// }

// Trying out Arrays
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(days);

// to add elements to the end of the Array
days.push("Saturday");
console.log(days);

// to add elements to the beginning of the Array
days.unshift("Null Day");
console.log(days);

//to remove the last element from the array and returns it
days.pop("Saturday");
console.log(days);

//to remove the first element from the array and returns it
days.shift("Null Day");
console.log(days);

// ADDING AND REMOVING ELEMENTS
// We can delete any element from the array. The value undefined will be placed instead of this element.

// to delete an element from an array - replacing it with undefined
delete days[2];
console.log(days);

// to add an element to an array
days[2] = "Wednesday";
console.log(days);

//to delete an element from an array
delete days[4];
console.log(days);

//OBJECTS IN JAVASCRIPT

//creating an object with object literal
var objectLiteral = {};

// creating an object with new object
//var objectConstructor = new objectLiteral();

// creating gimli
var gimli = {
  name: "Gimli",
  race: "dwarf",
  weapon: "axe",
  greet: function () {
    return `Hi, my name is ${this.name}!`;
  },
};

console.log(gimli);

// Accessing object properties
// using dot notation
console.log(gimli.weapon);

// using bracket notation
console.log(gimli["race"]);

// Adding & Modifying Object properties
console.log(gimli);

// to add a new property to an object with dot notation
gimli.age = 139;
console.log(gimli);

// to add a new property to an object with bracket notation
gimli["gender"] = "male";
console.log(gimli);

//adding a new fight method to gimli
gimli.fight = function () {
  return `Gimli attacks with an ${this.weapon}`;
};
console.log(gimli);

// updating weapon from axe to machine gun
gimli.weapon = "machine Gun";
console.log(gimli);

//removing object property
// to remove a property from an object, you use the delete keyword. Delete is an operator that removes a property from an object.

//removing weapon from gimli
delete gimli.weapon;
console.log(gimli);

// attempt at styling DOM elements
var elem = document.getElementById("intro");

// applying style on element
elem.style.color = "blue";
elem.style.fontSize = "2rem";
elem.style.fontWeight = "bold";
console.log("elem:", elem);

// adding elements to DOM
//creating a new div element
var newDiv = document.createElement("div");

// creating a text node
var newContent = document.createTextNode("Hi,how are you doing?");

//adding a text node to the newly created Div
newDiv.appendChild(newContent);

// adding the newly created element and it's content into the DOM
var currentDiv = document.getElementById("main");
document.body.appendChild(newDiv, currentDiv);

// //Trying out switch with pizza input in class

// const pizza = prompt(
//   "Please select your preference \n 1. Small Pizza \n 2. Medium pizza \n 3. Large Pizza \n 4. Extra-large Pizza"
// );

// switch(pizza){
//   case"1":
//   confirm("You've selected small-sized pizza")
//   break
//   case "2":
//     confirm("You've selected medium-sized pizza")
//     break
//   case"3":
//     confirm("You've selected large-sized pizza")
//     break
//   case "4":
//     confirm ("You've seleected extra large-sized pizza")
//     break
//   default:
//     alert("invalid input")

// }

// Class assessment - Soda drink dispensing water

const drink = prompt(
  "What drink will you like to have?\n 1. Coke\n 2. Fanta\n 3. Water"
);

switch (drink) {
  case "1":
    confirm("You've selected Coke");
    break;
  case "2":
    confirm("You've selected Fanta");
    break;
  case "3":
    confirm("You've selected water");
    break;
  default:
    alert("invalid input");
}

// Method is like a function.

// loop is used to iterate over a thing untill a certain condition is met.
// For loop
// While loop
// Do while loop
// For in loop
// For of loop

// let num = 0;
// while (num < 100) {
//   console.log("I will be a good boy", num);
//   num++;
// }

// Do while loop. It will run the first conditon first before checking if the looping condition is true.
// do {
//   console.log("I am dancing");
// } while (num < 110);
