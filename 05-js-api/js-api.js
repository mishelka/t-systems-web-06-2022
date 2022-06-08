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

const persons = [{name: "Michaela", age: 38}, {name: "Peter", age: 40}, {name: "Maria", age: 50}];
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