"use strict";

console.log('>>> THIS IS EXTERNAL FILE');

let a = 4; //3 //2 //1
let b = 3; //4 //5 //6 //7
let c = a % b;
let d = a - b;
      //  4 +   4 +   3 = 11
let x = a + ++b + --a;
    //  3 + 4   + 3 = 10
    x = a + b++ + a--;
    //  2 +   6 - 6   +   1 = 3
    x = a + ++b - b++ + --a;

    //a = 2

// ++b; // b = b + 1; vyhodnot b
// --b; // b = b - 1; vyhodnot b
// b++; // vyhodnot b; b = b + 1;

console.log(a, b, x);

// d = a * b;
// d = true;
d = 'Ahoj';
d += 'jahoda'; // d = d + 'jahoda';
d = null;

console.log(d ? d : "nic");
// //d = function () { console.log('jahoda'); }
//
// let f = null;
// c += a;
// d += b;
//
// console.log(a, b, c, d);

// if(f === null) {
//   console.log("ZIADNA \"ZIADNA\" HODNOTA");
// } else {
//   console.log(f);
// }
//
// const s1 = 0;
// const s2 = "";
// console.log(s1 == s2);
// console.log(s1 === s2);
//
// function abc() {
//   const e = 10;
//   console.log(e);
// }
//
const array = [1, 2, 3, "ahoj"];
array["jahoda"] = "toto je jahoda";
array.push('malina');
console.log(array);

for (let i in array) {
  document.write(i + ": " + array[i] + ", ");
}
document.write("<br>");

for (let elem of array) {
  document.write(elem);
}
document.write("<br>");

// array[0] = "jahodka"; //changing a value
// console.log(array[0]); //reading a value
// array[100] = 20139; //totally possible
// array.push({name: "Michaela", age: 30}); //adding a value
//
// console.log(array);
// console.log(array[2]);
//
// const person = {
//   name: 'Michaela',
//   surname: 'Bacikova',
//   email: 'michaela.bacikova@tuke.sk'
// };
//
// console.log(person["surname"]);
// console.log(person.surname);
//
// person.jahoda = "jahoda";
// console.log(person);
//
// delete person.email;
// console.log(person);
//
// console.log(abc);
//
// abc();
//
// let numString = 'abc'; //NaN
// console.log(Number.parseInt(numString));
// numString = '123'; //ok
// console.log(Number.parseInt(numString) + 4);

// const first = true;
// const second = false;
// const third = true;
//
// if(first && second && third) {
//
// }

const theDay = 6;
switch (theDay) {
  case 5:
    document.write("Finally Friday"); break;
  case 6: case 0:
    document.write("Weekend, YAY!"); break;
  default:
    document.write("I'm looking forward to this weekend!");
}

let i = 0; //1 //2 //3
while (i < 3) {
  document.write("*"); //***
  i++; //i = i + 1;
}

i = 0; //1 //2 //3
do {
  document.write("*"); //***
  i++;
} while (i < 3);

for (let i = 0; i < 3; i++) { //i = 1 //2 //3
  document.write("*"); //***
}

for (let i = 0; i < 3; i++) { //i = 1 //2 //3
  document.write("_"); //***
}

