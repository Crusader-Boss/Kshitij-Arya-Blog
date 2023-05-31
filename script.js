function toggleTheme() {
    // Get the body element
    var element = document.body;

    // Toggle the dark-theme class
    element.classList.toggle("dark-theme");
  }

  // Get the checkbox element
  var checkbox = document.getElementById("checkbox");

  // Add an event listener to call the toggleTheme function
  checkbox.addEventListener("change", toggleTheme);

// Get the checkbox element
var checkbox = document.getElementById("checkbox");

// Get the current theme from local storage or default to light
var theme = localStorage.getItem("theme") || "light";

// Update the checkbox checked property according to the theme
checkbox.checked = theme === "dark";

// Apply the theme to the body element
document.body.className = theme;

// Define a function to toggle the theme
function toggleTheme() {
  // Get the body element
  var element = document.body;

  // Toggle the dark-theme class
  element.classList.toggle("dark-theme");

  // Get the current theme from the body class
  var theme = element.className || "light";

  // Save the theme in local storage
  localStorage.setItem("theme", theme);
}

// Add an event listener to call the toggleTheme function
checkbox.addEventListener("change", toggleTheme);