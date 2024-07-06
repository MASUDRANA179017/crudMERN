const User = require("../model/registrarUser");

const emailVerificationController = async (req, res) => {
  let emailParams = req.params.email;
  let existingUser = await User.findOneAndUpdate(
    { email: emailParams },
    { emailVerify: true },
    { new: true }
  );

  if (existingUser == null) {
    return res.send("Email not found");
  } else {
    return res.send("Email verified ");
  }
};

module.exports = emailVerificationController;
