const router = require('express').Router();
const path = require('path');

// get route for the root URL
router.get('/', (req, res) => {
  res.render('login'); 
});

module.exports = router;
