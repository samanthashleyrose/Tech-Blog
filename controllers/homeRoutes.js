const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// get route for the root URL - LOGIN
router.get('/', withAuth, (req, res) => {
  res.render('root');
});

// get route to redirect to login from root
router.get('/login', (req, res) => {
  res.render('login');
});

// get route to redirect to sign up from root
router.get('/signup', (req, res) => {
  res.render('signup');
});

// get route to redirect to homepage
router.get('/homepage', (req, res) => {
  res.render('homepage');
});

module.exports = router;
