require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const User = require("./model/registrarUser.js");
const security = require("./middleware/security.middleware.js");
const secure = require("./controlar/sequrity.controlar.js");
const registrarUser = require("./controlar/registrationControlar.js");
const dbConnection = require("./helper/dbcanection.js");
const login = require('./controlar/loginControlar.js');
const emailVerificationController = require('./controlar/emailVerificationControlar.js');
const blogPostController = require('./controlar/blogControlar.js');

dbConnection()


// Middleware for parsing JSON
app.use(express.json());


// check secuty and controller 
app.get("/security", security, secure )

// main route 
app.post("/registration", security, registrarUser )
app.post("/login", security, login )
app.get("/:email", emailVerificationController)

app.post("/blog", security, blogPostController )






app.listen(8000, () => {
  console.log("Server is running on port 8000");
});









