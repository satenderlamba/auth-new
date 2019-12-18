const express = require('express');
const router = express.Router();

// Login Page
router.get('/login', (req, res) => res.render('login'));


// router.post('/login', (req, res, next) => {
//   res.render('dash')
// });


// Logout
router.get('/logout', (req, res) => {
  res.redirect('/users/login');
});

module.exports = router;