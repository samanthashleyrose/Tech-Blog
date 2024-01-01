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

// get route to render the profile page
router.get('/profile', withAuth, async (req, res) => {
  try {
      // fetch user info based on the logged-in user
      const userData = await User.findByPk(req.session.user_id, {
          attributes: ['name', 'email'],
      });

      // render the profile view with user data
      res.render('profile', { userData });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
