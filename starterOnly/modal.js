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
//regex

const regexEmail = /^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$/;
const regexBirth =
  /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
const regexNumber = /^[0-9]+$/;
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
        case "quantity":
          quantity = parseInt(e.target.value);
          break;
        case "cgv":
          cgv = e.target.value;
          break;
        case "newsletter":
          newsletter = e.target.value;
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

const locationsChecker = () => {
  document.querySelectorAll('input[name = "location"]').forEach((radio) => {
    if (radio.checked) {
      return true;
    }
  });
  return false;
};

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
function validate(e) {
  e.preventDefault();
  if (!firstNameChecker()) {
    formData.setAttribute("data-error-visible", "true");
    formData.datast.error = "Prénom invalide";
  } else if (!lastNameChecker()) {
    formData.setAttribute("data-error-visible", "true");
    formData.datast.error = "nom invalide";
  } else if (!emailChecker()) {
    formData.setAttribute("data-error-visible", "true");
    formData.datast.error = "Email invalide";
  } else if (!birthdateChecker()) {
    formData.setAttribute("data-error-visible", "true");
    formData.datast.error = "Date de naissance invalide";
  } else if (!quantityChecker()) {
    formData.setAttribute("data-error-visible", "true");
    formData.datast.error = "Quantité invalide";
  } else if (!locationsChecker()) {
    formData.setAttribute("data-error-visible", "true");
    formData.datast.error = "Location non sélectionné";
  } else if (!cgvChecker()) {
    formData.setAttribute("data-error-visible", "true");
    formData.datast.error = "sélectionner le champ des Cgv";
  } else {
    formData.removeAttribute("data-error-visible");
    dataSaving = {
      firstName,
      lastName,
      email,
      locations,
      birthdate,
      quantity,
    };
    validForm.style.display = "block";
    modalbg.style.display = "none";
  }
}
