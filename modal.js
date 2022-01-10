function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements------------------------------------------------------------------------------------------------//
let id = (id) => document.getElementById(id);
let classes = (classes) => document.querySelectorAll(classes);

const modalbg = id("bground"),
  form = document.querySelector("form"),
  modalBtn = classes(".modal-btn"),
  formData = classes(".formData"),
  formDataCgv = document.querySelector(".formData-cgv"),
  closer = id("close"),
  validForm = document.querySelector(".valid-form"),
  closeValidForm = id("close-valid-form");

// dom for all inputs
const inputs = document.querySelectorAll("input");

// variable & regex-------------------------------------------------------------------------------------------//

//regex
const regexEmail = /([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})/;
const regexBirth = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
const regexNumber = /^([0-9]|[1-9][0-9]|)$/;

// variable of inputs
let firstName, lastName, email, birthdate, quantity, locations, cgv, newsletter;

//launch & close modal--------------------------------------------------------------------------------------//

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Launch modal form
function launchModal() {
  form.reset();
  formData.forEach((f) => f.setAttribute("data-error-visible", "unset"));
  [email, birthdate, quantity, locations] = [null, null, undefined];
  validForm.style.display = "none";
  form.style.display = "block";
  modalbg.style.display = "block";
}
// Close modal event
closer.addEventListener("click", closeModal);
closeValidForm.addEventListener("click", closeModal);
// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// check modal values--------------------------------------------------------------------------------------//

// function to give users inputs values to variables
const getValue = () => {
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      switch (e.target.name) {
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
          birthdate = e.target.value;
          break;
        case "location":
          locations = e.target.value;
          break;
        case "quantity":
          quantity = parseInt(e.target.value);
          break;
        case "cgv":
          cgv = e.value;
          break;
        case "newsletter":
          newsletter = e.value;
          break;
        default:
          null;
      }
    });
  });
};

// call getValue function
getValue();

// check if users inputs are correct

const firstNameChecker = () =>
  document.querySelector("input[name = first]").value.trim().length >= 2;

const lastNameChecker = () =>
  document.querySelector("input[name = last]").value.trim().length >= 2;

const emailChecker = () => regexEmail.test(email);

const birthdateChecker = () => regexBirth.test(birthdate);

const quantityChecker = () => regexNumber.test(quantity);

const locationsChecker = () => (locations === undefined ? false : true);
const cgvChecker = () =>
  document.querySelector('input[name = "cgv"]:checked') !== null;

// final check & send the form----------------------------------------------------------------------------//

// listen the event submit & avoid the form to be send before the final check
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

// create an object to save all users inputs values
let dataSaving = {};

// main function who check all validators, send error messages, save data, send form & show greetings

function validate() {
  // boolean on false by default
  let hasError = false;
  // verify the checkers
  if (!firstNameChecker()) {
    // & give error message if user's input is wrong
    formData[0].setAttribute("data-error-visible", "true");
    hasError = true;
  } else {
    // or green border if user's input is correct
    formData[0].setAttribute("data-error-visible", "false");
  }
  if (!lastNameChecker()) {
    formData[1].setAttribute("data-error-visible", "true");
    hasError = true;
  } else {
    formData[1].setAttribute("data-error-visible", "false");
  }
  if (!emailChecker()) {
    formData[2].setAttribute("data-error-visible", "true");
    hasError = true;
  } else {
    formData[2].setAttribute("data-error-visible", "false");
  }
  if (!birthdateChecker()) {
    formData[3].setAttribute("data-error-visible", "true");
    hasError = true;
  } else {
    formData[3].setAttribute("data-error-visible", "false");
  }
  if (!quantityChecker()) {
    formData[4].setAttribute("data-error-visible", "true");
    hasError = true;
  } else {
    formData[4].setAttribute("data-error-visible", "false");
  }
  if (!locationsChecker()) {
    formData[5].setAttribute("data-error-visible", "true");
    hasError = true;
  } else {
    formData[5].setAttribute("data-error-visible", "false");
  }
  if (!cgvChecker()) {
    formDataCgv.setAttribute("data-error-visible", "true");
    hasError = true;
  } else {
    formDataCgv.setAttribute("data-error-visible", "false");
  }
  // if all the checkers are valid then save user's input in this object
  if (!hasError) {
    dataSaving = {
      firstName,
      lastName,
      email,
      locations,
      birthdate,
      quantity,
    };
    // then close the form and open the greetings
    form.style.display = "none";
    validForm.style.display = "flex";
  }
}
