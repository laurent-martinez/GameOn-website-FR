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
/*
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.name) {
      case "first":
        firstNameChecker(e.target.value);
        break;
      case "last":
        lastNameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      case "cgv":
        cgvChecker(e.target.value);
        break;
      case "newsletter":
        newsletter = e.target.value;
        break;
      default:
        null;
    }
  });
});
*/
const firstNameChecker = () => {
  document
    .querySelector("input[name = first]")
    .addEventListener("input", (e) => {
      firstName = e.target.value;
      if (firstName.length < 2 || firstName.trim() === "") {
        firstName = null;
      } else {
        firstName;
      }
    });
};
firstNameChecker();
const lastNameChecker = () => {
  document
    .querySelector("input[name = last]")
    .addEventListener("input", (e) => {
      lastName = e.target.value;
      if (
        lastName.length < 2 ||
        lastName === firstName ||
        lastName.trim() === ""
      ) {
        lastName = null;
      } else {
        lastName;
      }
    });
};
lastNameChecker();
const emailChecker = () => {
  document
    .querySelector("input[name = email]")
    .addEventListener("input", (e) => {
      email = e.target.value;
      if (
        !email.match(
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        )
      ) {
        email = null;
      } else {
        email;
      }
    });
};
emailChecker();

const birthdateChecker = () => {
  const selectDate = document.querySelector("input[name = birthdate]");

  selectDate.addEventListener("change", (e) => {
    birthdate = e.target.value;
    birthdate = birthdate.split("-").reverse().join("-");
    if (
      !birthdate.match(
        /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[.\/-]([0]?[1-9]|[1][0-2])[.\/-]([0-9]{4}|[0-9]{2})$/
      )
    ) {
      birthdate = null;
    } else {
      birthdate;
    }
  });
};

birthdateChecker();

const quantityChecker = () => {
  document
    .querySelector("input[name = quantity]")
    .addEventListener("input", (e) => {
      quantity = e.target.value;
      if (!quantity.match(/^[0-9]+$/)) {
        quantity = null;
      } else {
        quantity = parseInt(quantity);
      }
    });
};

quantityChecker();

const locationsChecker = () => {
  document.querySelectorAll('input[name = "location"]').forEach((radio) => {
    radio.addEventListener("change", function (e) {
      if (radio != null) {
        locations = e.target.value;
      } else {
        locations = null;
      }
    });
  });
};
locationsChecker();
const cgvChecker = () => {
  if (document.querySelector('input[name = "cgv"]:checked')) {
    cgv = 1;
  } else {
    cgv = null;
  }
};
cgvChecker();
/*
// validations for all inputs
/**
 * validation of form
 * @param {Number} validator increment for test inputs
 * @returns {Boolean} if the forms are valid or not
 */
/*
let dataSaving;
function validate(e) {
  e.preventDefault();
  if (
    firstName &&
    lastName &&
    email &&
    birthdate &&
    quantity &&
    locations &&
    cgv
  ) {
    dataSaving = {
      firstName,
      lastName,
      email,
      locations,
      birthdate,
      quantity,
    };
    form.innerHTML = `<h3>Merci pour votre inscription</h3> <button class='button'>Close</button>`;
  } else {
    alert("remplissez tous les champs!!!");
  }
}
*/
