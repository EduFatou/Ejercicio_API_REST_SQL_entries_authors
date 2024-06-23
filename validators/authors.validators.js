const { body, param, query } = require("express-validator");

const validateCreateAuthor = [
  body("name")
      .exists().withMessage("Author name is required")
      .isString().withMessage("Name should be string"),
  body("surname")
      .exists().withMessage("Author surname is required")
      .isString().withMessage("Surname should be string"),
  body("email")
      .exists().withMessage("Author email is required")
      .isEmail().withMessage("Valid email is required"),
  body("image")
      .exists().withMessage("Author image is required")
      .isString().withMessage("Valid email is required"),
];

const validateDeleteAuthor = [
  query('email').notEmpty().withMessage("Valid email is required")
];

const validateGetAuthor = [
    query('email').notEmpty().isEmail().withMessage("Email should exist to get an Author")
];

const validateUpdateAuthor = [
  body("name")
      .exists().withMessage("Author name is required")
      .isString().withMessage("Name should be string"),
  body("surname")
      .exists().withMessage("Author surname is required")
      .isString().withMessage("Surname should be string"),
  body("email")
      .exists().withMessage("Author email is required")
      .isEmail().withMessage("Valid email is required"),
  body("image")
      .exists().withMessage("Author image is required")
      .isString().withMessage("Author image is required"),
  body("old_email")
      .exists().withMessage("Author ref_email is required")
      .isEmail().withMessage("Valid ref_email is required"),
]

module.exports = {
    validateCreateAuthor,
    validateDeleteAuthor,
    validateGetAuthor,
    validateUpdateAuthor
};







