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
  res.render('login'); 
});

// get route that directs user to profile page after sign up button is selected on the login screen
router.get('/profile', withAuth, (req, res) => {
  // if user is already logged in, redirect to homepage
  if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
res.render('profile'); 
});

module.exports = router;
