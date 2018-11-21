const express = require('express');
const router = express.Router();

// Require the controllers
const userController = require('../controllers/user.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', userController.test);
module.exports = router;