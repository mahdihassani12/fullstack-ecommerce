const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const usersController = require("../controllers/usersController");
const { UserRequests } = require("../middlewares/validations");

router.get("/", usersController.getUsers);
router.post("/", UserRequests, usersController.postUsers);

module.exports = router;
