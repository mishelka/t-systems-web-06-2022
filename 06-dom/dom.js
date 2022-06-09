"use strict";

function upperCase(event) {
  //getElementById, getElementsByName
  console.log(event);
  //let elem = document.getElementById("fname");
  let elem = event.target;
  console.log("You wrote: " + elem.value + ", type: " + elem.type);
  document.getElementById("fname").value = elem.value.toUpperCase();
}

function thankYou() {
  let elem = document.getElementById("personForm");
  // elem.innerHTML = `
  // <h1> Thank you for submitting! </h1>
  // `;
  elem.innerHTML += `
  <h1> Thank you for submitting! </h1>
  `;
}

function validate(event) {
  event.preventDefault();
  let fname = document.personForm.fname.value;
  let color = document.personForm.color.value;
  console.log("name: " + fname, "color: " + color);

  thankYou();
}

function rightClickHandler(event) {
  event.preventDefault();
  console.log(event);
  console.log("RIGHT CLICK!");
}