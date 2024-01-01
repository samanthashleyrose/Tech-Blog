// GLOBAL VARIABLES
// NAV BUTTONS
const homeBtn = document.getElementById('home');
const dashboardBtn = document.getElementById('dashboard');
const profileBtn = document.getElementById('profile');
const logoutBtn = document.getElementById('logout');

// POST BUTTONS
const newPostTemplate = document.getElementById('new-post-template');
const newPostBtn = document.getElementById('new-post-btn');
const optionsContainer = document.querySelector('.options-container');
const savePostBtn = document.querySelector('.save-post-btn');
const sendPostBtn = document.querySelector('.send-post-btn');

// Functions for each nav button
const handleHomeBtn = () => {
    document.location.replace('/homepage');
};
const handleDashboardBtn = () => {
    document.location.replace('/dashboard');
};
const handleProfileBtn = () => {
    document.location.replace('/profile');
};
const handleLogOutBtn = () => {
    document.location.replace('/login');
};

// Event Listeners
homeBtn.addEventListener('click', handleHomeBtn);
dashboardBtn.addEventListener('click', handleDashboardBtn);
profileBtn.addEventListener('click', handleProfileBtn);
logoutBtn.addEventListener('click', handleLogOutBtn);

newPostBtn.addEventListener('click', () => {
    // Toggle the visibility of the new post template
    newPostTemplate.style.display = 'block';

    // Toggle the visibility of the options container
    optionsContainer.style.display = 'none';
});

savePostBtn.addEventListener('click', () => {
        const postTitle = document.getElementById('post-title').value;
        const postContent = document.getElementById('new-post-textarea').value;
});

sendPostBtn.addEventListener('click', () => {
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('new-post-textarea').value;

    document.location.replace('/homepage');
});

