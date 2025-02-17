import { content, createElement } from "./homepage.js";

export const createContactPage = () => {
  // Create the wrapper
  const wrapper = createElement("div", "", ["wrapper"], content);

  // Contact Us section
  const contactUs = createElement("div", "", ["contact-us"], wrapper);
  createElement("h2", "Contact Us", [], contactUs);

  // Contact Info section
  const contactInfo = createElement("div", "", ["contact-info"], wrapper);
  createElement("h3", "Shanab", [], contactInfo);
  createElement("p", "CEO", [], contactInfo);
  createElement("p", "+962-7-051-0499", [], contactInfo);
  createElement("p", "totally-real-email@notfake.com", [], contactInfo);

  // Highlight the contact button
  const contactButton = document.querySelector(".contact");
  if (contactButton) contactButton.classList.add("active-button");
};
