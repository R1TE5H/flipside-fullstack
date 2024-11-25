const user = require("../routes/user");
const subscriber = require("../routes/subscriber");

module.exports = function routes(app) {
  app.use("/user", user);
  app.use("/", subscriber);
};
