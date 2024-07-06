const bcrypt = require("bcrypt");
const User = require("../model/registrarUser");

let login = async (req, res) => {
  const { email, password } = req.body;
  if (email == "") {
    return res.send("email field is require");
  }
  if (password == "") {
    return res.send("password field is require");
  }

  let existingUser = await User.findOne({ email: email });

  if (existingUser == null) {
    return res.send("User doesn't existing");
  }

  bcrypt.compare(password, existingUser.password, function (err, result) {
    if (result) {
      if (existingUser.emailVerify) {
        res.send({
          message: "Login successful",
          name: existingUser.name,
          email: existingUser.email,
          phone: existingUser.phone,
          registrationDate: existingUser.registrationDate,
        });
      }else{
        res.send ("Please verify your email")
      }
    } else {
      res.send("Wrong password ");
    }
  });
};

module.exports = login;
