const { body, validationResult } = require("express-validator");
const { failed } = require("../../config/response");
const { users } = require("../../models");

exports.runValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json(failed({ message: errors.array()[0].msg }));
  }

  next();
};

exports.validatorUsers = [
  body("name", "name tidak boleh kosong").notEmpty(),
  body("address", "address tidak boleh kosong").notEmpty(),
  body("gender", "Jenis Kelamin tidak sesuai").isIn("F", "M"),
  body("phone")
    .notEmpty()
    .withMessage("Phone tidak boleh kosong")
    .custom(async (value) => {
      const phone = await users.findOne({
        where: { phone: value }
      });
      if (phone) {
        return Promise.reject("phone sudah digunakan");
      }
    }),
];
