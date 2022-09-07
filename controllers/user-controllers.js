const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//User signup handler
exports.signUp = async (req, res) => {
  try {
    const { email, fullName, phoneNumber, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      fullName,
      phoneNumber,
      password: hash,
    });

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

//User login handler
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please enter a valid password and email",
      });
    }
    const user = await User.findOne({ email }).select("+password");
    const confirmPassword = await bcrypt.compare(password, user.password);
    if (!confirmPassword || !user) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: `There is no user with the id ${req.params.id}`,
      });
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "successful deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: `There is no user with the id ${req.params.id}`,
      });
    }
    const email = req.body.email === undefined ? user.email : req.body.email;
    const phoneNumber =
      req.body.phoneNumber === undefined
        ? user.phoneNumber
        : req.body.phoneNumber;
    const fullName =
      req.body.fullName === undefined ? user.fullName : req.body.fullName;
    const password =
      req.body.password === undefined ? user.password : req.body.password;
    const update = { email, phoneNumber, fullName, password };

    const updatedUser = await User.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        updatedUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

//Get All Users
exports.getAll = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      results: user.length,
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

//Get One User
exports.getOne = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
