const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");
const creatUser = async (userData) => {
  try {
    let { firstname, lastname, email, password } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("user Already Exist With Email :", email);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
    });

    console.log("created user :", user);

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    //.populate("address");

    if (!user) {
      throw new Error("user not found with id :", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("user not found with Email :", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);

    const user = await findUserById(userId); //.populate("addresses");
    //  user.password = null;   //  ....
    if (!user) {
      throw new Error("user not found with id :", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  creatUser,
  findUserById,
  getUserByEmail,
  getUserProfileByToken,
  getAllUsers,
};
