// Importing NPM Packages
require("dotenv").config();
const cors = require("cors");
const express = require("express");

// Importing Startup middleware
const connection = require("./startup/db");
const routes = require("./startup/routes");

// Creating Web Server
const app = express();

app.use(cors());
app.use(express.json());

// Calling Startup methods
connection();
routes(app);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on PORT ${port}...`));
