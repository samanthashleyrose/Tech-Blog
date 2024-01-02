// GLOBAL VARIABLES
const optionsContainer = document.querySelector('.options-container');

// NAV BUTTONS
const homeBtn = document.getElementById('home');
const dashboardBtn = document.getElementById('dashboard');
const profileBtn = document.getElementById('profile');
const logoutBtn = document.getElementById('logout');

// POST BUTTONS
const newPostTemplate = document.getElementById('new-post-template');
const newPostBtn = document.getElementById('new-post-btn');
const savePostBtn = document.getElementById('save-post-btn');
const sendPostBtn = document.getElementById('send-post-btn');
const newPostOnDraftsPage = document.getElementById('drafts-new-post-btn');

// DRAFT BUTTONS
const viewDraftsBtn = document.getElementById('view-drafts-btn');
const viewDraftsPage = document.getElementById('view-drafts');
const viewDraftsOnNewPostPage = document.getElementById('new-post-drafts-btn');

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

// Function to toggle visibility
function toggleVisibility(element, displayValue) {
    if (element) {
        element.style.display = displayValue;
    }
}

// Event Listeners
homeBtn.addEventListener('click', handleHomeBtn);
dashboardBtn.addEventListener('click', handleDashboardBtn);
profileBtn.addEventListener('click', handleProfileBtn);
logoutBtn.addEventListener('click', handleLogOutBtn);

newPostBtn.addEventListener('click', (event) => {
    event.preventDefault();
    toggleVisibility(newPostTemplate, 'block');
    toggleVisibility(optionsContainer, 'none');
});

savePostBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('new-post-textarea').value;
});

sendPostBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('new-post-textarea').value;

    document.location.replace('/homepage');
});

viewDraftsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    toggleVisibility(viewDraftsPage, 'block');
    toggleVisibility(optionsContainer, 'none');
});

viewDraftsOnNewPostPage.addEventListener('click', (event) => {
    event.preventDefault();
    toggleVisibility(viewDraftsPage, 'block');
    toggleVisibility(newPostTemplate, 'none');
    toggleVisibility(optionsContainer, 'none');
});

newPostOnDraftsPage.addEventListener('click', (event) => {
    event.preventDefault();
    toggleVisibility(viewDraftsPage, 'none');
    toggleVisibility(newPostTemplate, 'block');
    toggleVisibility(optionsContainer, 'none');
});

