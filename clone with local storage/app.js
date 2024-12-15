// DOM Elements
var loginButton = document.getElementById("loginButton");
var showSignupButton = document.getElementById("showSignupButton");
var signupButton = document.getElementById("signupButton");
var backToLoginButton = document.getElementById("backToLoginButton");

var loginForm = document.getElementById("loginForm");
var signupForm = document.getElementById("signupForm");

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");

var loginError = document.getElementById("loginError");
var signupError = document.getElementById("signupError");
var signupSuccess = document.getElementById("signupSuccess");

// Show Signup Form
showSignupButton.addEventListener("click", function () {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    loginError.style.display = "none";
});

// Handle Signup
signupButton.addEventListener("click", function () {
    var name = signupName.value.trim();
    var email = signupEmail.value.trim();
    var password = signupPassword.value.trim();

    if (name && email && password) {
        // Check if email already exists in Local Storage
        if (localStorage.getItem("email:" + email)) {
            signupError.style.display = "block";
            signupSuccess.style.display = "none";
        } else {
            // Save user data in Local Storage
            localStorage.setItem("name:" + email, name);
            localStorage.setItem("email:" + email, email);
            localStorage.setItem("password:" + email, password);

            signupError.style.display = "none";
            signupSuccess.style.display = "block";

            // Clear the form fields
            signupName.value = "";
            signupEmail.value = "";
            signupPassword.value = "";
        }
    } else {
        signupError.style.display = "block";
        signupError.textContent = "All fields are required.";
    }
});

// Back to Login
backToLoginButton.addEventListener("click", function () {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    signupError.style.display = "none";
    signupSuccess.style.display = "none";
});

// Handle Login
loginButton.addEventListener("click", function () {
    var email = loginEmail.value.trim();
    var password = loginPassword.value.trim();

    if (email && password) {
        var storedPassword = localStorage.getItem("password:" + email);
        if (storedPassword && storedPassword === password) {
            var userName = localStorage.getItem("name:" + email);
            alert("Login Successful! Welcome, " + userName);
        } else {
            loginError.style.display = "block";
        }
    } else {
        loginError.style.display = "block";
        loginError.textContent = "Both fields are required.";
    }
});
