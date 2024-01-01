// GLOBAL VARIABLES
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('sign-up-btn');

// Function to redirect browswer to login.handlebars
const redirectToLogin = () => {
    document.location.replace('/login');
};

// Function to redirect browswer to signup.handlebars
const redirectToSignup = () => {
    document.location.replace('/signup');
};

// Event Listeners
loginBtn.addEventListener('click', redirectToLogin);
signupBtn.addEventListener('click', redirectToSignup);