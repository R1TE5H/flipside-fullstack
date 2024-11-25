const mongoose = require("mongoose");
const Joi = require("joi");

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Subscriber = mongoose.model("Subscribers", subscriberSchema);

function validateSubscriber(subscriber) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });
  return schema.validate(subscriber);
}

exports.Subscriber = Subscriber;
exports.validateSubscriber = validateSubscriber;
