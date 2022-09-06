const User = require("../models/user-model");

//User signup handler
exports.signUp = async (req, res) => {
  try {
    const { email, fullName, phoneNumber, password } = req.body;
    const user = await User.create({ email, fullName, phoneNumber, password });

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
    if (user.password !== password || !user) {
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
