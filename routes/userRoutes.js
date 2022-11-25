const express = require('express');
const router = express.Router();

//import the controllers
const { registerUser, loginUser, getUserInfo, logoutUser } = require('../controllers/userController');

//get auth middleware
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .post(registerUser);

router.route('/login')
    .post(loginUser);

router.route('/my-info')
    .get(protect, getUserInfo);
    
router.route('/logout')
    .post(logoutUser);    

module.exports = router;