// GLOBAL VARIABLES
const loginBTN = document.getElementById('login-btn');
const signupBTN = document.getElementById('sign-up-btn');

document.getElementById('sign-up-btn').addEventListener('click', () => {
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('pass-input').value;

    // Checks input validation
    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        document.querySelector('.error-message').innerText = 'Password must be at least 8 characters long and contain 1 special character';
    } else if (email !== '@') { //checks to email contains correct email formatting 
        document.querySelector('.error-message').innerText = 'Must enter valid email';
    } else {
        // If validation passes, submit the form
        document.querySelector('form').submit();
    }
});
