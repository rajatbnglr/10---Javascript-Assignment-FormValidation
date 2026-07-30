document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        clearErrors();
        let isValid = true;

        const name = document.getElementById("name").value.trim();
        if (name === "") {
            showError("nameError", "Name is required.");
            isValid = false;
        } else if (name.length < 3 || name.length > 50) {
            showError("nameError", "Name must be between 3 and 50 characters.");
            isValid = false;
        }

        const email = document.getElementById("email").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            showError("emailError", "Email is required.");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError("emailError", "Please enter a valid email address.");
            isValid = false;
        }

        const phone = document.getElementById("phone").value.trim();
        if (phone === "") {
            showError("phoneError", "Phone number is required.");
            isValid = false;
        } else if (phone.length < 10 || phone.length > 14) {
            showError("phoneError", "Phone number must be between 10 and 14 digits.");
            isValid = false;
        }

        const ageVal = document.getElementById("age").value.trim();
        const age = Number(ageVal);
        if (ageVal === "" || isNaN(age)) {
            showError("ageError", "Age is required.");
            isValid = false;
        } else if (age < 12 || age > 100) {
            showError("ageError", "Age must be between 12 and 100.");
            isValid = false;
        }

        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            showError("genderError", "Please select a gender.");
            isValid = false;
        }

        const address = document.getElementById("address").value.trim();
        if (address.length > 50) {
            showError("addressError", "Address cannot exceed 50 characters.");
            isValid = false;
        }

        if (isValid) {
            document.getElementById("successMessage").textContent = "Registration Successful!";
            form.reset();
        }
    });

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll(".error-msg");
        errorElements.forEach((el) => (el.textContent = ""));
        document.getElementById("successMessage").textContent = "";
    }
});