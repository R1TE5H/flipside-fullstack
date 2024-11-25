const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minLength: 1, maxLength: 50 },
  lastName: { type: String, required: true, minLength: 1, maxLength: 50 },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, length: 10 },
  agreements: { type: Boolean, required: true },
  password: { type: String, required: true, minLength: 8, maxLength: 255 },
  isAdmin: { type: Boolean, default: false, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_PROTECTED_TOKEN
  );
  return token;
};

const User = mongoose.model("Users", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().required().min(1).max(50),
    lastName: Joi.string().required().min(1).max(50),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string()
      .pattern(/^\d{10}$/)
      .required(),
    agreements: Joi.boolean().valid(true).required(),
    password: Joi.string()
      .min(8)
      .max(255)
      .required()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]+$/
      ),
  });
  return schema.validate(user);
}

function validateLogin(user) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .max(255)
      .required()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]+$/
      ),
  });
  return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
exports.validateLogin = validateLogin;
