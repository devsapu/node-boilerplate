const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signin', userController.signin);
router.post('/login', userController.login);

module.exports = router;