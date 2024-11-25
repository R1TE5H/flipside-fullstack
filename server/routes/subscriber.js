const express = require("express");
const { Subscriber, validateSubscriber } = require("../models/subscriber");
const { waitList, waitListTransporter } = require("../models/emails/waitList");

const router = express.Router();

router.post("/", async (req, res) => {
  const result = validateSubscriber(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  let subscriber = await Subscriber.findOne({ email: req.body.email });
  if (subscriber) return res.status(400).send("I have already Subscribed");

  subscriber = new Subscriber({
    email: req.body.email,
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: "Welcome to Flipside!",
    html: waitList,
  };

  subscriber = await subscriber.save();
  waitListTransporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(`There was an Error: ${error}`);
    else console.log(`Email was sent successfully: ${info.response}`);
  });

  res.send(subscriber);
});

module.exports = router;
