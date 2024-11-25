const mongoose = require("mongoose");

module.exports = async function connection() {
  await mongoose
    .connect(process.env.DB)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error(`Error: ${err}`));
};
