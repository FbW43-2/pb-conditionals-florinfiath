'use strict'
console.log("1.____________________________________");
// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog = false;
if (isDog) {
console.log("pat, pat")}
else {console.log("find me a dog to pat!")};


console.log("2.____________________________________");
// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck;
let SpeedLimit = 50;
let Speed = 211;

if (Speed > SpeedLimit) {
    console.log("You're going to fast!")
}else if (Speed < SpeedLimit) {
    console.log("You're driving below the speed limit, Oma")
}

console.log("3.____________________________________");
// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age = 12
if (age < 16 ) {
    console.log ("serve butter beer");
}else console.log ("serve beer");


console.log("4.____________________________________");
// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let isStudent = false;
if (isStudent === true) {
    console.log("Ticket costs €5,00");
}else if (isStudent === false) console.log("Ticket costs €12,00");

console.log("5.____________________________________");
// 5.Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".

let okMarie = "cake";
if (okMarie) {
    console.log("Let them eat cake");
}else console.log("Oh, bother");

console.log("6.____________________________________");
// 6.Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

let number = 43423432;
let ResultEven = (number % 2 === 0);
 if (ResultEven) {
     console.log (`${number} is even`)
 }else console.log (`${number} is odd`);

