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

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(401).json({
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
