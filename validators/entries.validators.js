const { body, param, query } = require("express-validator");

const validateCreateEntries = [
    body("title")
        .exists().withMessage("Title of entries is required")
        .isString().withMessage("Title should be string"),
    body("content")
        .exists().withMessage("Entries content is required")
        .isString().withMessage("Content should be string"),
    body("date")
        .exists().withMessage("Entries date is required")
        .isString().withMessage("Date should be string"),
    body("email")
        .exists().withMessage("Entries email is required")
        .isEmail().withMessage("Valid email is required"),
    body("category")
        .exists().withMessage("Entries category is required")
        .isString().withMessage("Category should be string")
];

const validateDeleteEntry = [
    query('title').notEmpty().withMessage("Title should exist to delete an entry")
];

const validateGetEntries = [
    query('email').notEmpty().isEmail().withMessage("Email should exist to get an entry")
];

const validateUpdateEntry = [
    body("title")
        .exists().withMessage("Title of entries is required")
        .isString().withMessage("Title should be string"),
    body("content")
        .exists().withMessage("Entries content is required")
        .isString().withMessage("Content should be string"),
    body("date")
        .exists().withMessage("Entries date is required")
        .isDate().withMessage("Date should be a date"),
    body("email")
        .exists().withMessage("Entries email is required")
        .isEmail().withMessage("Valid email is required"),
    body("category")
        .exists().withMessage("Entries category is required")
        .isString().withMessage("Category should be string"),
    body("old_title")
        .exists().withMessage("Old title is required")
        .isString().withMessage("Old title should be string")
];

module.exports = {
    validateCreateEntries,
    validateDeleteEntry,
    validateGetEntries,
    validateUpdateEntry
};