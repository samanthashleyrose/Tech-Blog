// GLOBAL VARIABLES
const loginBtn = document.getElementById('login-btn');

const handleLoginBtn = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('pass-input').value.trim();

    if (validateInput(email, password)) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
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
        errorMessage.innerText = ''; // Clear any previous error message
        return true;
    }
}

// Event Listeners
loginBtn.addEventListener('submit', handleLoginBtn);

