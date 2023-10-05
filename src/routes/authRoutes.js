const express = require('express');
const AuthController = require('../controllers/authController')
const router = express.Router();

/* GET users listing. */
router.get('/users',(req,res)=>{
  res.json('demo deployment')
})
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

module.exports = router;