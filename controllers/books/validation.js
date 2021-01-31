const { body, validationResult } = require("express-validator");
const { failed } = require("../../config/response");
const { books } = require("../../models");

exports.runValidatorbooks = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(failed({ message: errors.array()[0].msg }));
  }

  next();
};

exports.validatorBooks = [
  body("name")
    .notEmpty()
    .withMessage("name tidak boleh kosong")
    .custom(async (value) => {
      const name = await books.findOne({
        where: { name: value }
      });
      if (name) {
        return Promise.reject("name sudah digunakan");
      }
    }),
    body("type_books_id")
    .notEmpty()
    .withMessage("type_books tidak boleh kosong")
    .custom(async (value) => {
      const type_books = await books.findOne({
        where: { type_books_id: value }
      });
      if (type_books) {
        return Promise.reject("type_books sudah digunakan");
      }
    })
];
