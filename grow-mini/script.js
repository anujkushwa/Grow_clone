// Get the form and button elements
const openFormBtn = document.getElementById("openFormBtn");
const closeFormBtn = document.getElementById("closeFormBtn");
const form = document.getElementById("signUpForm");

// When the user clicks the button, open the form
openFormBtn.onclick = function() {
    form.style.display = "block";
}

// When the user clicks the close button, close the form

closeFormBtn.onclick = function() {
    form.style.display = "none";
}

// Optional: Close the form when clicking outside the form

window.onclick = function(event) {
    if (event.target == form) {
        form.style.display = "none";
    }
}

// Get the form element

const trialForm = document.getElementById("trialForm");

// Listen for form submission

trialForm.onsubmit = function(event) {
    event.preventDefault();

    // Validate the form

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const terms = document.getElementById("terms").checked;

    
    if (firstName && lastName && email && terms) {

        alert("Thank you for submitting your details!");

        trialForm.reset();
    } else {
        alert("Please fill out all required fields and agree to the terms and conditions.");
    }
}
