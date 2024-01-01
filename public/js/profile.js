// GLOBAL VARIABLES
const homeBtn = document.getElementById('home');
const dashboardBtn = document.getElementById('dashboard');
const profileBtn = document.getElementById('profile');
const logoutBtn = document.getElementById('logout');

// Event Listeners
homeBtn.addEventListener('click', handleHomeBtn);
dashboardBtn.addEventListener('click', handleDashboardBtn)
profileBtn.addEventListener('click', handleProfileBtn);
logoutBtn.addEventListener('click', handleLogOutBtn);