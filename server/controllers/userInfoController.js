const asyncHandler = require("../middleware/asyncHandler");
const UserInfo = require("../models/userInfoModel");
const generateToken = require("../utils/generateTokens");

const createUserInfo = asyncHandler(async (req, res) => {
  const { topic, description, name, telephone, telegram, email } = req.body;
  const file = `/uploads/${req.file.filename}`
    const userExists = await UserInfo.findOne({ email });

  if (userExists) {
    res.status(400); //client error - meaning client did something wrong
    throw new Error("User already exists");
  }
  const userInfo = await UserInfo.create({topic, description, file, name, telephone, telegram, email});

  if (userInfo) {
    // generateToken(res,userInfo._id)
    res.status(201).json({
        _id: userInfo._id,
        topic: userInfo.topic,
        description: userInfo.description,
        file: req.file,
        name: userInfo.name,
        telephone: userInfo.telephone,
        telegram: userInfo.telegram,
        email: userInfo.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid userInfo data");
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const userInfo = await UserInfo.find({});
  res.status(200).json(userInfo);
});

const getUserInfo = asyncHandler(async (req, res) => {
  const userInfo = await UserInfo.findById(req.params.id);

  if (userInfo) {
    res.status(200).json({
        _id: userInfo._id,
        topic: userInfo.topic,
        description: userInfo.description,
        file: userInfo.file,
        name: userInfo.name,
        telephone: userInfo.telephone,
        telegram: userInfo.telegram,
        email: userInfo.email,
    });
  } else {
    res.status(404);
    throw new Error("UserInfo not found");
  }
});

const getUserInfoByID = asyncHandler(async (req, res) => {
  const userInfo = await UserInfo.findById(req.params.id);
  if (userInfo) {
    res.status(200).json(userInfo);
  } else {
    res.status(404);
    throw new Error("UserInfo not found");
  }
});

const deleteUserInfo = asyncHandler(async (req, res) => {
  const userInfo = await UserInfo.findById(req.params.id);
  if (userInfo) {
    await UserInfo.deleteOne({ _id: userInfo._id });
    res.status(200).json({ message: "UserInfo deleted successfully" });
  } else {
    res.status(404);
    throw new Error("UserInfo not found");
  }
});

const updateUserInfo = async (req, res) => {
  const userInfo = await UserInfo.findById(req.params.id);
  console.log(userInfo.file)
  if (userInfo) {
    userInfo.topic = req.body.topic || userInfo.topic;
    userInfo.description = req.body.description || userInfo.description;
    userInfo.file =  req.file&&req.file.filename || userInfo.file;
    userInfo.name = req.body.name || userInfo.name;
    userInfo.telephone = req.body.telephone || userInfo.telephone;
    userInfo.telegram = req.body.telegram || userInfo.telegram;
    userInfo.email = req.body.email || userInfo.email;
    
    const updatedUserInfo = await userInfo.save();
    res.status(200).json({
      _id: updatedUserInfo._id,
        topic: updatedUserInfo.topic,
        description: updatedUserInfo.description,
        file: req.file,
        name: updatedUserInfo.name,
        telephone: updatedUserInfo.telephone,
        telegram: updatedUserInfo.telegram,
        email: updatedUserInfo.email
    });
  } else {
    res.status(404);
    throw new Error("UserInfo not found");
  }
};

module.exports= {createUserInfo, getUsers, getUserInfoByID, getUserInfo,deleteUserInfo,updateUserInfo};
