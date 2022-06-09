"use strict";

// const person = { name: "Michaela", surname: "Bacikova", age: 38 };
// for(let k of Object.keys(person)) {
//   console.log(k);
// }
// for(let v of Object.values(person)) {
//   console.log(v);
// }
// for(let e of Object.entries(person)) {
//   console.log(e);
// }

const array = [1, 2, 3, 4, 5, 6];

console.log(array[2]);
array[2] = 7;

const persons = [
  {name: "Michaela", age: 38},
  {name: "Peter", age: 40},
  {name: "Maria", age: 50},
  {name: "Peter", age: 22},
];
console.log("length", array.length);
console.log("toString", array.toString());

array.pop();
console.log("pop", array);

array.push(100);
console.log("push", array);

//delete array[3];
//console.log("delete", array);

const arr2 = array;
//arr2[4] = "jahoda";
console.log(array);
console.log(arr2);

let concatenated = array.concat(persons);
console.log("concat using concat()", concatenated);

concatenated = [...array, ...persons];
console.log("concat using spread/rest", concatenated);

console.log(array.join('-'));
console.log(array.reverse());
console.log(array.shift());
console.log(array);

persons.forEach(item => console.log(item.name + ' ' + item.age));
//const personNames = persons.map(function(person) { return person.name });
const personNames = persons.map(person => person.name);
console.log(personNames);

const filteredPersons = persons.filter(person => person.age <= 40);
console.log(filteredPersons);

console.log(persons.every(person => person.age <= 100));
console.log(persons.some(person => person.age <= 30));

console.log(array.reduce((total, value) => total += value));

console.log(array.indexOf(4));

console.log(persons.find(person => person.name.charAt(0) === 'M'));
console.log(persons.findIndex(person => person.name.charAt(0) === 'M'));

console.log(Array.from('abcdefg'));

console.log(array.includes(90));
console.log(array.includes(4));


let obj = { x: 1, y: 2, a: 3, b: 4 };
let obj2 = {...obj};
console.log(obj2);

let sorted = persons.sort(
  (p1, p2) => {
    const nameCompare = p1.name.localeCompare(p2.name);
    if(nameCompare !== 0) return nameCompare;
    return p1.age - p2.age;
  }
);
console.log(sorted);

//STRINGS

console.log("jahoda".charAt(2) + 89430284);
console.log("jahoda"[4]);
const str = "Toto je nejaka dlha veta";
console.log(str.lastIndexOf('a'), str.length);
console.log(str.substring(4, str.length));
console.log(str.toUpperCase());
console.log(str.split(' '));

const multiline = "Hello \
World!";
const backtick = `
Toto je \n\n\n string
na viacerych
riadkoch.
`;

console.log(multiline, backtick);
console.log(str.includes("nejaka"));

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
let num = 5;
console.log(num.toFixed(3));

num = 5.18;
console.log("cbrt", Math.cbrt(num));

const date = new Date();
console.log(date);
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());
console.log(Date.now());
console.log(date.getTime());
console.log(date.getMonth());

const regex = /^(?<year>\d{2})(?<month>\d{2})(?<day>\d{2})(?<lastDigits>\d{3,4})$/g;
const rodnecislo = "1234567890";
console.log(rodnecislo.match(regex));
const result = regex.exec(rodnecislo);
console.log(result);
if(Number.parseInt(result[3]) > 31) console.log("nespravne rodne cislo");
if(Number.parseInt(result.groups.day) > 31) console.log("nespravne rodne cislo");

const intervalId = setInterval(() => console.log("toto je casovac"), 1000);

setTimeout(() => clearTimeout(intervalId), 10000);