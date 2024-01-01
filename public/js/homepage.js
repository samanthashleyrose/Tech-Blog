// GLOBAL VARIABLES
const homeBtn = document.getElementById('home');
const dashboardBtn = document.getElementById('dashboard');
const profileBtn = document.getElementById('profile');
const logoutBtn = document.getElementById('logout');

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
dashboardBtn.addEventListener('click', handleDashboardBtn)
profileBtn.addEventListener('click', handleProfileBtn);
logoutBtn.addEventListener('click', handleLogOutBtn);