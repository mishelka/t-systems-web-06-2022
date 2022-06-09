"use strict";

function upperCase() {
  //getElementById, getElementsByName
  let elem = document.getElementById("fname");
  console.log("You wrote: " + elem.value + ", type: " + elem.type);
  document.getElementById("fname").value = elem.value.toUpperCase();
}

function youWon() {
  let elem = document.getElementById("personForm");
  // elem.innerHTML = `
  // <h1> Thank you for submitting! </h1>
  // `;
  elem.innerHTML += `
  <h1> Thank you for submitting! </h1>
  `;
}

function validate() {
  let fname = document.personForm.fname.value;
  let color = document.personForm.color?.value;
  console.log(fname, color);
}