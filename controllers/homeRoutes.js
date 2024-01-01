const router = require('express').Router();
const path = require('path');
const { User } = require('../models');

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
router.get('/profile', (req, res) => {
  // if user is already logged in, redirect to homepage
  if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
res.render('profile'); 
});

module.exports = router;
