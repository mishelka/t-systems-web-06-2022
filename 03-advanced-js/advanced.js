"use strict";

// console.log(sum1(5, 6));
//! TOTO SA DA LEN PO const sum2 !
//console.log(sum2(3, 5));

let a = 5;
const b = 6;
const c = sum1(a, b);
console.log(a, b, c);

function sum1(x, y) {
  //x = 10;
  return a + b;
}

const sum2 = function (x, y) {
  return x + y;
}

function rename(person) {
  person.name = 'Peter';
  person.surname = 'Bacik';
}

function deleteThird(array) {
  if(array?.length >= 3) {
    delete array[3];
  }
}

console.log(array.length);

const person = { name: 'Michaela', surname: 'Bacikova', speak: () => console.log('Ahoj! ja som Miska!') };
const person2 = person;
console.log(person);
rename(person2);
console.log(person);
person.speak();
console.log(`Ahoj, ja som ${person ? person.name : ' no name '} ${person ? person.surname : ''}`);

const arr = [1, 2, 3, 4, 5];
const arr2 = arr;
console.log(arr);
deleteThird(arr2);
console.log(arr);
//deleteThird(null); -- ak nemame ? za array v deleteThird, tak to padne na tom, ze v deleteThird robime null.length

let z = 5;
let w = z;
w += 10;

console.log(z, w);

function odrtrhniDvere(car) {
  car.pocetDveri--;
}

const car = {znacka: 'BMW', typ: 'sedan', pocetDveri: 4};
const car2 = car;
console.log(car);
odrtrhniDvere(car2);
console.log(car);
console.log(car2);

const func = function (car) {
  return car.pocetDveri--;
}

// const func = car => car.pocetDveri--;

function writeToConsole() {
  console.log("time ran out 1!");
}

console.log("start");
setTimeout(writeToConsole, 5000);
setTimeout(() => console.log("time ran out 2!"), 5000);

function nova() {
  //return writeToConsole;
  return () => console.log("time ran out 2!");
}

function sum(...args) {
  const privatnaFunkcia = () => {
    console.log("THIS IS PRIVATE");
  }

  console.log(args);
  let sum = 0; //private in function
  for (let arg of args) sum += arg;
  return sum;
  var xyz = "xyz"; //private in function
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77, "abc"); //global
console.log(x);

{
  var mna = 120; //not private in block!
  let abc = 123;
  const cde = 234;
  abc = 5;
  //cde = 5;

  console.log(mna, abc, cde);
}

console.log(mna/*, abc, cde, xyz*/); //abc, cde, xyz are not global

// const r = confirm("Press a button");
// if(r === true)
//   document.write("Pressed OK!");
// else
//   document.write("Pressed Cancel!");

// const name = prompt("Enter your name", "Bond");
// if(name != null && name !== "")
//   document.write("Hello " + name);