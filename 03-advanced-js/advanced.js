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

const obj = { name: 'Michaela', surname: 'Bacikova', speak: () => console.log('Ahoj! ja som Miska!') };
const obj2 = obj;
console.log(obj);
rename(obj2);
console.log(obj);
obj.speak();

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