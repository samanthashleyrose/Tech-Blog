// GLOBAL VARIABLES
const signupBtn = document.getElementById('sign-up-btn');

const handleSignUpBtn = async (event) => {
    event.preventDefault();

    const name = document.getElementById('name-input').value.trim();
    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('pass-input').value.trim();

    if (validateInput(name, email, password)) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
}

// Function to validate email using a regular expression
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to check input validation
function validateInput(email, password) {
    const errorMessage = document.querySelector('.error-message');

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errorMessage.innerText = 'Password must be at least 8 characters long and contain 1 special character';
        return false;
    } else if (!isValidEmail(email)) {
        errorMessage.innerText = 'Must enter a valid email';
        return false;
    } else {
        errorMessage.innerText = '';
        return true;
    }
}

// Event Listeners
signupBtn.addEventListener('submit', handleSignUpBtn);