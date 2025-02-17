// Select the content container
export const content = document.querySelector("#content");

// Utility function to create an element
export const createElement = (tag, text = "", classes = [], appendTo) => {
  const element = document.createElement(tag);
  if (text) element.innerText = text;
  if (classes.length) element.classList.add(...classes);
  appendTo.appendChild(element);
  return element;
};

// Function to create the Home Page
export const createHomePage = () => {
  // Create the wrapper
  const wrapper = createElement("div", "", ["wrapper"], content);

  // Restaurant name section
  const restaurantName = createElement("div", "", ["restaurant-name"], wrapper);
  createElement("h1", "Fatty Dab's Burger Shack", [], restaurantName);

  // Testimonial section
  const testimonials = createElement("div", "", ["testimonial"], wrapper);
  createElement(
    "p",
    "Burger Shack has the best burgers in town! With it being the first restaurant that serves oven-made burgers in Amman, it will surely be an outstanding experience that will make you come again and again!",
    [],
    testimonials
  );
  createElement("h3", "Siraj Shaker", [], testimonials);

  // Working hours section
  const workingHours = createElement("div", "", ["working-hours"], wrapper);
  createElement("h3", "Working hours:", [], workingHours);
  createElement(
    "p",
    "Saturday - Thursday: 10am - 12am Friday: 12pm - 10pm",
    [],
    workingHours
  );

  // Location section
  const location = createElement("div", "", ["location"], wrapper);
  createElement("h3", "Location:", [], location);
  createElement("p", "Arjan, At-Tabari Street, Building #18", [], location);

  // Highlight the home button
  const homeButton = document.querySelector(".home");
  if (homeButton) homeButton.classList.add("active-button");
};
