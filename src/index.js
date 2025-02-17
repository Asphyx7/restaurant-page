import "./style.css";
import { createHomePage } from "./homepage.js";
import { createContactPage } from "./contact.js";
import { createMenuPage } from "./menu.js";

// Initialize the page with the Home Page
createHomePage();

// Button references
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

// Helper function to reset active buttons
const resetActiveButtons = (activeButton) => {
  [homeButton, menuButton, contactButton].forEach((button) => {
    if (button !== activeButton) {
      button.classList.remove("active-button");
    }
  });
  activeButton.classList.add("active-button");
};

// Helper function to remove the wrapper
const removeWrapper = () => {
  const wrapper = document.querySelector(".wrapper");
  if (wrapper) wrapper.remove();
};

// Event listeners for navigation buttons
homeButton.addEventListener("click", () => {
  removeWrapper();
  createHomePage();
  resetActiveButtons(homeButton);
});

menuButton.addEventListener("click", () => {
  removeWrapper();
  createMenuPage();
  resetActiveButtons(menuButton);
});

contactButton.addEventListener("click", () => {
  removeWrapper();
  createContactPage();
  resetActiveButtons(contactButton);
});
