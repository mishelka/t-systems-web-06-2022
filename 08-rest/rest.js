"use strict";
let persons = [];
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

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

window.onload = function() {
  loadPersons();
  renderTable();
}

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
  addPerson(person);
  renderTable();
}

function renderTable() {
  let tableBody = document.getElementById("personTableBody");
  console.log(tableBody);
  tableBody.innerHTML = "";
  for(let person of persons) {
    tableBody.innerHTML += `
      <tr>
        <td>${person.id}</td>
        <td>${person.name}</td>
        <td>${person.email}</td>
        <td>${person.phone}</td>
        <td>${person.website}</td>
        <td><button onclick="handleDelete(${person.id})">Delete</button></td>
      </tr>
    `;
  }
}

async function getPerson(personId) {
  try {
    const response = await fetch(`${BASE_URL}/personId`);
    if(response.status === 200) {
      console.log(response);
    }
  } catch(err) {
    console.error("Sorry, an error occured", err);
  }
}

async function addPerson(person) {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: 'POST',
      body: person,
    });
    if(response.status === 200) {
      console.log(response);
      await loadPersons();
    }
  } catch(err) {
    console.error("Sorry, an error occured", err);
  }
}

async function handleDelete(idToDelete) {
  try {
    const response = await fetch(`${BASE_URL}/${idToDelete}`, {
      method: 'DELETE',
    });
    if(response.status === 200) {
      console.log(response);
      await loadPersons();
      await getPerson(11);
    }
  } catch(err) {
    console.error("Sorry, an error occured", err);
  }
}

const loadPersons = async () => {
  try {
    const response = await fetch(BASE_URL);
    if(response.status === 200) {
      persons = await response.json();
      console.log(persons);
      renderTable();
    }
  } catch(err) {
    console.error("Sorry, an error occured", err);
  }
}