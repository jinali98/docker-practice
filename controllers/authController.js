const User = require("../models/userModel");

exports.signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        user: user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
