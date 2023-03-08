const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.getUsers = async (req, res, next) => {
  try {
    res.send("Users api");
  } catch (error) {
    res.status(500).send("Server error ", error);
  }
};

exports.postUsers = async (req, res, next) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else {

    }

  } catch (error) {
    res.status(500).send("Server error ", error);
  }
};
