// This function changes the color of the caret based on the form the user has clicked on.
function changeCaretColor(e) {
    var form = e.target.closest("form");
    var caret = form.querySelector("input:focus + .caret");
    caret.style.color = form.querySelector("input[type=submit]").style.backgroundColor;
  }
  
  // This function is called when the form is submitted.
  function submitForm(e) {
    e.preventDefault();
  
    var formData = new FormData(document.getElementById("contact-me"));
  
    // Send the form data to Netlify Forms.
    fetch("https://forms.netlify.com/forms/contact-me", {
      method: "POST",
      body: formData
    });
  }
  
  // When the page loads, add event listeners to the forms.
  document.addEventListener("DOMContentLoaded", function() {
    var forms = document.querySelectorAll("form");
  
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("click", changeCaretColor);
      forms[i].addEventListener("submit", submitForm);
    }
  });

