const router = require('express').Router();
const { siginup, login } = require('../controller/userController');
const User = require('../models/UserModel');


router.post('/', siginup)



router.post('/login', login)


module.exports = router