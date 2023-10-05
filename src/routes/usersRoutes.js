const express = require('express');
const UserController = require('../controllers/usersController')
const router = express.Router();

/* GET users listing. */
router.get('/:email',UserController.getUserEmail)
module.exports = router;
