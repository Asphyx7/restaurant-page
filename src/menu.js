import { content, createElement } from "./homepage.js";

export const createMenuPage = () => {
  // Create the wrapper
  const wrapper = createElement("div", "", ["wrapper"], content);

  // Menu Title section
  const menuTitle = createElement("div", "", ["menu-title"], wrapper);
  createElement("h2", "Menu", [], menuTitle);

  // Beef Burger section
  const beefBurger = createElement("div", "", ["beef-burger"], wrapper);
  createElement("h3", "Beef burger", [], beefBurger);
  createElement("p", "A nice slice of beef burger!", [], beefBurger);

  // Chicken Burger section
  const chickenBurger = createElement("div", "", ["chicken-burger"], wrapper);
  createElement("h3", "Chicken burger", [], chickenBurger);
  createElement("p", "A fantastic plastic chicken slice!", [], chickenBurger);

  // Highlight the menu button
  const menuButton = document.querySelector(".menu");
  if (menuButton) menuButton.classList.add("active-button");
};
