"use strict";

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

const persons = [
  new Person("Peter", 22, new Date(),"male"),
  new Person("Michaela", 22, new Date(),"female"),
];
window.onload = function() {
  renderTable();
}

function upperCase(event) {
  //getElementById, getElementsByName
  console.log(event);
  let elem = event.target;
  console.log("You wrote: " + elem.value + ", type: " + elem.type);
  document.getElementById("fname").value = elem.value.toUpperCase();
}

function thankYou() {
  let elem = document.getElementById("personForm");
  // elem.innerHTML = `
  // <h1> Thank you for submitting! </h1>
  // `;
  // const thankYou = document.createElement("h1");
  // thankYou.innerHTML = "Thank you for submitting!";
  // elem.appendChild(thankYou);
  elem.innerHTML += `
  <h1> Thank you for submitting! </h1>
  `;
}

function submitHandler(event) {
  event.preventDefault();
  let fname = document.personForm.fname.value;
  let gender = document.personForm.color.value;
  console.log("name: " + fname, "gender: " + gender);

  let redElem = document.getElementById("color-red");
  console.log(redElem.getAttributeNode("value"));

  const p = new Person(fname, 0, new Date(), gender);
  persons.push(p);
  renderTable();

  thankYou();
}

function rightClickHandler(event) {
  event.preventDefault();
  console.log(event);
  console.log("RIGHT CLICK!");
}

function hideName(event) {
  console.log(event.target.name + ": " + event.target.checked);
  const nameContainer = document.getElementById("nameContainer");
  if(event.target.checked) {
    nameContainer.setAttribute("class", "hidden");
  } else {
    if(nameContainer.getAttribute("class") !== null) {
      nameContainer.removeAttribute("class");
    }
  }
  // if(event.target.checked) {
  //   document.getElementById("personF").removeChild(document.getElementById("fname"));
  // }
}

function moveLi() {
  let superWidget = document.getElementById("widget1");
  let ul = superWidget.parentNode;
  //ul.innerHtml += superWidget; !! pozor neodstranuje povodny element, nespravi nic!
  ul.appendChild(superWidget);
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