"use strict";

// const person = { name: 'Michaela', surname: 'Bacikova', printPerson: () => { console.log("I am a person"); } };
//
// console.log(person);
// console.log(person.name);
// person.name = 'Peter';
//
// person.printPerson();

class Person {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return 'Person called ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, age = 0, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
  describe() {
    return super.describe() + ' (' + this.jobTitle + ')';
  }
}

class Student extends Person {
  constructor(name, age = 0, isicNumber) {
    super(name, age);
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

const employee = new Employee('Michaela', 38, 'lector');
console.log(employee);
console.log(employee.describe());

const student = new Student('Michaela', 18, '1234567');
console.log(student);
console.log(student.describe());

class Car {
  constructor(brand, type = "sedan", numberOfDoors = 4, owner) {
    this.brand = brand;
    this.type = type;
    this.numberOfDoors = numberOfDoors;
    this.started = false;
    if(person instanceof Person) {
      this.owner = owner;
    } else {
      console.log('owner is not a person');
    }
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