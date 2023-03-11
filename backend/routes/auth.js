const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authorization");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config/key");
const bcrypt = require("bcryptjs");

// defining the routes
router.get("/", auth, (req, res) => res.send("Auth route"));

module.exports = router;
