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
  closer = id("close"),
  validForm = querySelector(".valid-form");

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
          birthdate = e.target.value;
          break;
        case "quantity":
          quantity = e.target.value;
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

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("#" + tag);
  const span = document.querySelector("#" + tag + " +span");
  if (!valid) {
    container.classList.add("error");
    span.classList.add("error-message");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const firstNameChecker = () =>
  document.querySelector("input[name = first]").value.trim().length > 2;

const lastNameChecker = () => {
  document.querySelector("input[name = last]").value.trim().length > 2;
};

const emailChecker = () => {
  document
    .querySelector("input[name = email]")
    .value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
};

const birthdateChecker = () => {
  const selectDate = document.querySelector("input[name = birthdate]");

  selectDate.addEventListener("change", (e) => {
    birthdate = birthdate.split("-").reverse().join("-");
    if (
      !birthdate.match(
        /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[.\/-]([0]?[1-9]|[1][0-2])[.\/-]([0-9]{4}|[0-9]{2})$/
      )
    ) {
      return false;
    } else {
      return true;
    }
  });
};

const quantityChecker = () => {
  document
    .querySelector("input[name = quantity]")
    .addEventListener("input", (e) => {
      quantity = e.target.value;
      if (!quantity.match(/^[0-9]+$/)) {
        return false;
      } else {
        quantity = parseInt(quantity);
        return true;
      }
    });
};

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
  if (!firstName) {
    errorDisplay("first", "Veuillez completer ce champ");
  }
  if (!lastName) {
    errorDisplay("last", "Veuillez completer ce champ");
  }
  if (!email) {
    errorDisplay("email", "Veuillez completer ce champ");
  }
  if (!quantity) {
    errorDisplay("quantity", "Veuillez completer ce champ");
  }
  if (!birthdate) {
    errorDisplay("birthdate", "Veuillez completer ce champ");
  }

  if (
    firstNameChecker() &&
    lastNameChecker() &&
    emailChecker() &&
    birthdateChecker() &&
    quantityChecker() &&
    locationsChecker() &&
    cgvChecker()
  ) {
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
