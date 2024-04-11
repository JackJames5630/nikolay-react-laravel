const express = require("express");
const router = express.Router();
const {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUser,
    updateUser
} = require('../controllers/userController.js');
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route('/').post(registerUser).get(protect, getUsers);
router.post('/auth', authUser); //login
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserByID).put(protect, admin, updateUser);

module.exports= router;
