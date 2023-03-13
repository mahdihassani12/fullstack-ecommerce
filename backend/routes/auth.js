const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authorization");
const usersController = require("../controllers/usersController");
const { UserAuth } = require("../middlewares/validations");

// defining the routes
router.get("/", auth, usersController.getUser);
router.post("/", UserAuth, usersController.authUser);
module.exports = router;
