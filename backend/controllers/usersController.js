const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/key");

exports.getUsers = async (req, res, next) => {
  try {
    res.send("Users api");
  } catch (error) {
    res.status(500).send("Server error ", error);
  }
};

exports.postUsers = async (req, res, next) => {
  const { name, email, password, role } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name,
        email,
        password,
        role,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: 3600 * 24 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    }
  } catch (error) {
    res.status(500).send("Server error ", error);
  }
};
