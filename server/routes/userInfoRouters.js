const express = require("express");
const router = express.Router();
var upload = require('./uploadRoutes.js')

const {createUserInfo, getUsers, getUserInfoByID, getUserInfo,deleteUserInfo,updateUserInfo} = require('../controllers/userInfoController.js');
const { protect, admin } = require("../middleware/authMiddleware.js");


router.route('/').post(upload.single('file'),createUserInfo).get(getUsers);
router.route('/:id/profile').get(getUserInfo).put(upload.single('file'), updateUserInfo);
router.route('/:id').get(getUserInfoByID).delete(deleteUserInfo);

module.exports= router;
