'use strict'

console.log("1. ___________________________________");
// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

var x = 11;
var y = 98;

if ((x >=50 && x<= 99) || (y>=50 && y<=99)) 
    {console.log(true)};

console.log("2. ___________________________________");
// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

var x = 11;
var y = 98;
var z = 54;

if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <=99)) 
console.log(true);

console.log("3. ___________________________________");
//3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

var a = 4;
var b = 15;
var c = 11;

if ( a > c && b > c) {
    console.log("a");
}else if (b > c){
    console.log("b");
}else (console.log("c"));

console.log("4. ___________________________________");
// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let Py;
let givenString = `This is a new String`;
let newString = `${Py} : ${givenString}`;

if (newString.startsWith(Py)){
    console.log(givenString)
};
console.log("5. ___________________________________");
// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

let d = 55;
let g = 22;
let result = d+g;
if (result > 50 && result < 80)
  console.log(65);
 else console.log(80);
console.log("6. ___________________________________");
// 6.Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let h = 4;
let j = 2;
let sumResult = h+j;
let difResult = h-j;

if (sumResult === 8 || difResult === 8) {
   console.log(true);
}
   else(console.log(false));
console.log("7. ___________________________________");
// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

   let k = 5;
   let l = 10;
   let Result = k + l;

   if (Result === 15 || (k || l) === 15) {
     console.log(true);
   } else console.log(false);
console.log("8. ___________________________________");
// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let e = 14;
let i = 2;

if (e % 7 === 0 || i % 7 === 0 || e % 11 === 0 || i % 11 === 0){
    console.log(true);
}else(console.log(false));

console.log("9. ___________________________________")
// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let m = 12;
let n = 12;
let SResult =m+n;

if (m === n){
    console.log(SResult * 3);
}else console.log(false);

console.log("10.___________________________________");
// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let o = 21;
let Dif = o - 19;

if (o > 19) {
    console.log(Dif * 2);
}else console.log(false);

console.log("11.BONUS CHALLENGE___________________________");
// 11.BONUS CHALLENGE: Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".





console.log("12.BONUS CHALLENGE__________________________");
// 12.BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.

