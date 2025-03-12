const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content > div", {
  ...scrollRevealOption,
  delay: 1000,
});


function validateForm() {
    let isValid = true;
  
    // Validate First Name
    const firstName = document.getElementById("firstName");
    const firstNameError = document.getElementById("firstNameError");
    if (!firstName.value.match(/[A-Za-z]+/)) {
      firstNameError.style.display = "inline";
      isValid = false;
    } else {
      firstNameError.style.display = "none";
    }
  
    // Validate Last Name
    const lastName = document.getElementById("lastName");
    const lastNameError = document.getElementById("lastNameError");
    if (!lastName.value.match(/[A-Za-z]+/)) {
      lastNameError.style.display = "inline";
      isValid = false;
    } else {
      lastNameError.style.display = "none";
    }
  
    // Validate Date
    const date = document.getElementById("date");
    const dateError = document.getElementById("dateError");
    if (!date.value) {
      dateError.style.display = "inline";
      isValid = false;
    } else {
      dateError.style.display = "none";
    }
  
    // Validate Person count
    const person = document.getElementById("person");
    const personError = document.getElementById("personError");
    if (person.value < 1 || isNaN(person.value)) {
      personError.style.display = "inline";
      isValid = false;
    } else {
      personError.style.display = "none";
    }
  
    return isValid;
  }
  