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