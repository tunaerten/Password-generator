"use strict";

const copyClipboardEl = document.querySelector(".copy-clipboard-icon");
const passwordInput = document.getElementById("password-input");
let outputValue = document.querySelector(".output-value");
const slider = document.getElementById("slider");
const checkBoxes = document.querySelectorAll("input[type='checkbox']");
const strengthValueText = document.querySelector(".strength-value-text");
const strengthBoxes = document.querySelectorAll(".strength-box");
const generateBtn = document.querySelector(".generate");
const errorContainer = document.querySelector(".error-container ");
const closeBtn = document.querySelector(".close");
const generatorEl = document.querySelector(".generator");
const ghostInput = document.querySelector(".ghost-input");
const copiedEl = document.querySelector(".copied");

const copyClipboard = () => {
  copyClipboardEl.addEventListener("click", () => {
    const textToCopy = passwordInput.textContent;
    navigator.clipboard.writeText(textToCopy);
    copiedEl.classList.add("active");
    resetValues();
  });
};

const moveSlider = () => {
  slider.addEventListener("input", () => {
    // Set the sliders value to output
    outputValue.textContent = slider.value;
    // Change the slider colors
    slider.addEventListener("mousemove", () => {
      let x = slider.value * 5;
      let color =
        "linear-gradient(90deg, var(--clr-accent-300) " +
        x +
        "%, var(--clr-neutral-800) " +
        x +
        "%)";
      slider.style.background = color;
    });
  });
};

const controlCheckboxes = () => {
  return Array.from(checkBoxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.id);
};

const getCategories = () => {
  // Set the password categories
  const categories = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  };
  return categories;
};

const getRandomCharacters = (length, clickedIds) => {
  const categories = getCategories();
  let selectedCategories = "";

  //   Get selected checkboxes
  clickedIds.forEach((id) => {
    if (categories[id]) selectedCategories += categories[id];
  });

  //   Get random characters and return them

  let result = "";
  for (let i = 0; i < length; i++) {
    result +=
      selectedCategories[Math.floor(Math.random() * selectedCategories.length)];
  }

  return result;
};

const openErrorMsg = (passwordLength, clickedIds) => {
  if (
    clickedIds.length === 0 ||
    passwordLength <= 0 ||
    (passwordLength >= 0 && clickedIds.length === 0)
  ) {
    errorContainer.classList.add("active");
    generatorEl.style.opacity = ".2";
    return false;
  }
  return true;
};

const closeErrorMsg = () => {
  errorContainer.classList.remove("active");
  generatorEl.style.opacity = "1";
};

const setColor = (nmb, color) => {
  strengthBoxes[nmb].style.backgroundColor = color;
  strengthBoxes[nmb].style.border = "0px";
};

const colors = {
  tooWeak: "var(--clr-accent-600)",
  weak: "var(--clr-accent-500)",
  medium: "var(--clr-accent-400)",
  strong: "var(--clr-accent-300)",
};

const setStrength = (passwordLength) => {
  let count = 0;
  let color;

  if (passwordLength <= 5) {
    strengthValueText.innerText = "Too Weak!".toUpperCase();
    color = colors.tooWeak;
    count = 1;
  } else if (passwordLength <= 9) {
    strengthValueText.innerText = "Weak".toUpperCase();
    color = colors.weak;
    count = 2;
  } else if (passwordLength <= 15) {
    strengthValueText.innerText = "Medium".toUpperCase();
    color = colors.medium;
    count = 3;
  } else {
    strengthValueText.innerText = "Strong".toUpperCase();
    color = colors.strong;
    count = 4;
  }

  // Reset the boxes styling

  for (let i = 0; i < strengthBoxes.length; i++) {
    strengthBoxes[i].style.backgroundColor = "";
    strengthBoxes[i].style.border = "2px solid var(--clr-neutral-100)";
  }

  // Call the function with colors and repeatNumber
  for (let i = 0; i < count; i++) {
    setColor(i, color);
  }
};

const resetValues = () => {
  outputValue.textContent = "0";
  slider.value = 0;
  slider.style.background = "none";
  slider.style.backgroundColor = "var(--clr-neutral-800)";
  strengthValueText.innerText = "";
  strengthBoxes.forEach((box) => {
    box.style.backgroundColor = "";
    box.style.border = "2px solid var(--clr-neutral-100)";
  });
  checkBoxes.forEach((checkbox) => (checkbox.checked = false));

  passwordInput.classList.add("active");
  setTimeout(() => {
    passwordInput.value = "";
    ghostInput.style.opacity = "0";
    passwordInput.classList.remove("active");
    passwordInput.style.transition = "none";
    copiedEl.classList.remove("active");
  }, 1000);

  setTimeout(() => {
    ghostInput.style.opacity = "1";
    passwordInput.style.transition = "color 1s ease, transform 1s ease";
  }, 1100);
};

const closeListeners = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeErrorMsg();
    }
  });
  document.addEventListener("click", (e) => {
    if (!generateBtn.contains(e.target)) {
      closeErrorMsg();
    }
  });
};

const generatePassword = () => {
  moveSlider();
  generateBtn.addEventListener("click", () => {
    const clickedIds = controlCheckboxes();
    const passwordLength = +slider.value;
    copyClipboard();
    // Open Error Message
    if (openErrorMsg(passwordLength, clickedIds)) {
      passwordInput.value = getRandomCharacters(passwordLength, clickedIds);
      setStrength(passwordLength, clickedIds);
    }
  });
  // Close Error Messages
  closeBtn.addEventListener("click", closeErrorMsg);
  closeErrorMsg();
  closeListeners();
};

generatePassword();
