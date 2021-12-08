function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements----------------------------------------//
let id = (id) => document.getElementById(id);
let classes = (classes) => document.querySelectorAll(classes);

const modalbg = id("bground"),
  form = document.querySelector("form"),
  modalBtn = classes(".modal-btn"),
  formData = classes(".formData"),
  closer = id("close");

// dom for all inputs
const inputs = document.querySelectorAll(
  "input[type=text],input[type=email],input[type=date],input[type=number],input[type=radio],input[type=checkbox]"
);
// variable of inputs
let firstName,
  lastName,
  email,
  birthDate,
  quantity,
  location1,
  location2,
  location3,
  location4,
  location5,
  location6,
  cgv,
  newsletter;
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Launch modal ,form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal event
closer.addEventListener("click", closeModal);
// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// give user input value to variable
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstName = e.target.value;
        break;
      case "last":
        lastName = e.target.value;
        break;
      case "email":
        email = e.target.value;
        break;
      case "birthdate":
        birthDate = e.target.value;
        break;
      case "quantity":
        quantity = e.target.value;
        break;
      case "location1":
        location1 = e.target.value;
        break;
      case "location2":
        location2 = e.target.value;
        break;
      case "location3":
        location3 = e.target.value;
        break;
      case "location4":
        location4 = e.target.value;
        break;
      case "location5":
        location5 = e.target.value;
        break;
      case "location6":
        location6 = e.target.value;
        break;
      case "checkbox1":
        cgv = e.target.value;
        break;
      case "checkbox2":
        newsletter = e.target.value;
        break;
      default:
        null;
    }
  });
});
// validations

function validate() {
  // check firstName
  if (firstName.length < 2 || firstName.trim() === "") {
    firstName = null;
  } else {
    firstName;
  }
  //check lastName
  if (lastName.length < 2 || lastName === firstName || lastName.trim() === "") {
    lastName = null;
  } else {
    lastName;
  }
  //check email
  if (
    !email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
  ) {
    email = null;
  } else {
    email;
  }
  //check birthDate
  if (
    !birthDate.match(
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
    )
  ) {
    birthDate = null;
  } else {
    birthDate;
  }
  //check quantity
  if (!quantity.match(/^[0-9]+$/)) {
    quantity = null;
  } else {
    quantity;
  }
  //check location
  if (
    !location1.checked ||
    !location2.checked ||
    !location3.checked ||
    !location4.checked ||
    !location5.checked ||
    !location6.checked
  ) {
    location1 = null;
    location2 = null;
    location3 = null;
    location4 = null;
    location5 = null;
    location6 = null;
  } else {
    location1;
    location2;
    location3;
    location4;
    location5;
    location6;
  }
  //check cgv
  if (!cgv.checked) {
    cgv = null;
  } else {
    cgv;
  }
}
validate();
// final validation of form & saving data

/*form.addEventListener("submit", (e) => {
  e.preventDefault();
});*/
