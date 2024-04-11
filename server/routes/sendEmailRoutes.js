const express = require("express");
const router = express.Router();
const {sendEmail} = require('../controllers/sendEmailController.js');
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route('/').post(sendEmail)

module.exports= router;
