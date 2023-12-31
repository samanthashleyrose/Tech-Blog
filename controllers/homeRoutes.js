const router = require('express').Router();
const path = require('path');

// get route for the root URL - LOGIN
router.get('/', (req, res) => {
    // if user is already logged in, redirect to homepage
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
      }
  res.render('login'); 
});

module.exports = router;
