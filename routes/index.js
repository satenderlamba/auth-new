const express = require('express');
const router = express.Router();


// Welcome Page
router.get('/',  (req, res) => res.render('index'));

// Dashboard
router.get('/dashboard', (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
