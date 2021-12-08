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
let firstName, lastName, email, birthDate, quantity, cities, cgv, newsletter;
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

/*function validate() {

  }*/

// final validation of form & saving data

/*form.addEventListener("submit", (e) => {
  e.preventDefault();
});*/
