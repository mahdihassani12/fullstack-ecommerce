const { body, oneOf } = require("express-validator");

const UserRequests = [
    body('name')
    .exists({ checkFalsy: true })
    .withMessage("Please provide user name"),
    body('email')
    .isEmail()
    .withMessage("Please provide a valid email address"),
    body('password')
    .exists({ checkFalsy: true })
    .withMessage("Please provide password")
    .custom((value) => {
        if (value.length < 5) {
          return Promise.reject("Password length must be greater than 5 characters.");
        }else {
          return true;
        }
    }),
    body('role')
    .optional({ checkFalsy: true, nullable: true })
    .isIn(["customer", "seller", "admin"])
    .withMessage("Please provide a valid customer role")
];

const UserAuth = [
  body('email')
    .isEmail()
    .withMessage("Please provide a valid email address"),
  body('password')
    .exists({ checkFalsy: true })
    .withMessage("Please provide password")
]


module.exports = {
    UserRequests,
    UserAuth
}