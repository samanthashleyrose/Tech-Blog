const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// get route for the root URL - LOGIN
router.get('/', (req, res) => {
    // if user is already logged in, redirect to homepage
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
      }
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

module.exports = router;
