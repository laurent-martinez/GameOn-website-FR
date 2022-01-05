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
  formDataCgv = document.querySelector(".formData-cgv"),
  closer = id("close"),
  validForm = document.querySelector(".valid-form"),
  closeValidForm = id("close-valid-form");
//regex

const regexEmail = /([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})/;
const regexBirth =
  /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
const regexNumber = /^[1-9][0-9]?$/;

// dom for all inputs
const inputs = document.querySelectorAll("input");
// variable of inputs
let firstName, lastName, email, birthdate, quantity, locations, cgv, newsletter;
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Launch modal ,form
function launchModal() {
  modalbg.style.display = "block";
}
// Close modal event
closer.addEventListener("click", closeModal);
closeValidForm.addEventListener("click", closeModal);
// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// give user input value to variable
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
          birthdate = e.target.value.split("-").reverse().join("-");
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
getValue();

const firstNameChecker = () =>
  document.querySelector("input[name = first]").value.trim().length > 2;

const lastNameChecker = () =>
  document.querySelector("input[name = last]").value.trim().length > 2;

const emailChecker = () => regexEmail.test(email);

const birthdateChecker = () => regexBirth.test(birthdate);

const quantityChecker = () => regexNumber.test(quantity);

const locationsChecker = () => (locations === undefined ? false : true);
const cgvChecker = () =>
  document.querySelector('input[name = "cgv"]:checked') !== null;

/*
// validations for all inputs
/**
 * validation of form
 * @param {Number} validator increment for test inputs
 * @returns {Boolean} if the forms are valid or not
 */

let dataSaving;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});
function validate() {
  let hasError = false;
  if (!firstNameChecker()) {
    formData[0].setAttribute("data-error-visible", "true");
    hasError = true;
  } else {
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
  if (!hasError) {
    dataSaving = {
      firstName,
      lastName,
      email,
      locations,
      birthdate,
      quantity,
    };
    form.reset();
    form.style.display = "none";
    validForm.style.display = "flex";
  }
}
