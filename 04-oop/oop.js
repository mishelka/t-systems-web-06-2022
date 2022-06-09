"use strict";

// const person = { name: 'Michaela', surname: 'Bacikova', printPerson: () => { console.log("I am a person"); } };
//
// console.log(person);
// console.log(person.name);
// person.name = 'Peter';
//
// person.printPerson();

class Person {
  constructor(name, age = 0, birthDate = new Date(), gender = null) {
    this.name = name;
    this.age = age;
    this.birthDate = birthDate;
    this.gender = gender;
  }
  describe() {
    return `Person called ${this.name}, age ${this.age} born ${this.birthDate?.toLocaleDateString()}, ${this.gender}`;
  }
}

class Employee extends Person {
  constructor(name, age = 0, birthDate = new Date(), gender, jobTitle) {
    super(name, age, birthDate, gender);
    this.jobTitle = jobTitle;
  }
  describe() {
    return super.describe() + ' (' + this.jobTitle + ')';
  }
}

class Student extends Person {
  constructor(name, age = 0, birthDate = new Date(), gender, isicNumber = "") {
    super(name, age, birthDate, gender);
    this.isicNumber = isicNumber;
  }
  //method overriding
  describe() {
    return super.describe() + ' isicNumber: ' + this.isicNumber;
  }
}

const personObj = new Person("Michaela");
console.log(personObj);
console.log(personObj.describe());

const employee = new Employee('Michaela', 38, new Date(1984, 11, 15), 'lector');
console.log(employee);
console.log(employee.describe());

// const student = new Student('Michaela', 18, '1234567');
// console.log(student);
// console.log(student.describe());

class Car {
  constructor(brand, type = "sedan", numberOfDoors = 4, owner) {
    this.brand = brand;
    this.type = type;
    this.numberOfDoors = numberOfDoors;
    this.started = false;
  }
  start() {
    this.started = true;
    console.log("The car is started.");
  }
  stop() {
    this.started = false;
    console.log("The car has stopped.");
  }
  isStarted() {
    console.log(this.started ? "The cars is started." : "The car is stopped.");
  }
}

class PersonalCar extends Car {
  constructor(brand, type = "sedan", numberOfDoors = 4, numberOfSeats = 4) {
    super(brand, type, numberOfDoors);
    this.numberOfSeats = numberOfSeats;
  }
}

class Truck extends Car {
  constructor(brand, type = "sedan", numberOfDoors = 4, load =  null) {
    super(brand, type, numberOfDoors);
    this.load = load;
  }

  loadStuff(stuff) {
    this.load = stuff;
  }

  unloadStuff() {
    this.load = null;
  }
}

const car = new Car("bmw");
car.owner = personObj;
car.start();
console.log(car);
car.stop();
console.log(car);
car.isStarted();
console.log(car.started);
console.log("OWNER: ", car.owner.name);
console.log(car.owner.describe());

const personalCar = new PersonalCar("audi");
personalCar.isStarted();
console.log(personalCar, "seats: ", personalCar.numberOfSeats);

const truck = new Truck("avia");
console.log(truck);
truck.loadStuff("jahody");
truck.start();
console.log(truck);

const persons = [
  new Person("Michaela", 38, new Date(1984, 11, 15), "female"),
  new Person("Peter", 39, new Date(1983, 0, 14), "male"),
  new Employee("Peter", 22, new Date(), "male", "manager"),
  new Student("Maria", 40, new Date(), "female"),
  new Employee("Peter", 22, new Date(),"male", "copy worker"),
];

window.onload = function() {
  renderTable();
}

console.log(persons.filter(p => p instanceof Employee));

const submitHandler = (event) => {
  event.preventDefault();
  console.clear();
  const name = document.personForm.name.value;
  const birthDate = new Date(document.personForm.birthDate.value);
  const gender = document.personForm.gender.value;

  //validation

  console.log(birthDate);
  const age = new Date().getFullYear() - birthDate.getFullYear();
  console.log(age);
  const person = new Person(name, age, birthDate, gender);
  console.log(person);
  persons.push(person);
  renderTable();
  console.log(persons);
}

function renderTable() {
  let tableBody = document.getElementById("personTableBody");
  console.log(tableBody);
  tableBody.innerHTML = "";
  for(let person of persons) {
    tableBody.innerHTML += `
      <tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.birthDate.toLocaleDateString()}</td>
        <td>${person.gender}</td>
      </tr>
    `;
  }
}