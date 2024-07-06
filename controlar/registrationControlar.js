const bcrypt = require("bcrypt");
const User = require("../model/registrarUser");
const nodemailer = require("nodemailer");

const registrarUser = async (req, res) => {
  const { name, email, password, phone, registrationDate } = req.body;

  if (name == "") {
    return res.send("name field is require ");
  }
  if (email == "") {
    return res.send("email field is require");
  }
  if (password == "") {
    return res.send("password field is require");
  }

  let existinguser = await User.findOne({ email: email });

  if (existinguser != null) {
    return res.send("User already existing");
  }

  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) {
      return res.status(500).send("Error hashing password");
    }
    const user = new User({
      name: name,
      email: email,
      password: hash,
      phone: phone,
      registrationDate: registrationDate,
    });
    user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pppmasudrana@gmail.com",
        pass: "ihho thde ztco nijc",
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'MyBlog', // sender address
      to: user.email, // list of receivers
      subject: "MyBlog website new User Verification ", // Subject line
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Email Template</title></head><body style="margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f4f4f4"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4"><tr><td align="center" style="padding:20px 0"><table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff;border:1px solid #ddd;border-radius:5px"><tr><td style="padding:20px;text-align:center;background-color:#0073e6;color:#fff;font-size:24px;font-weight:700;border-top-left-radius:5px;border-top-right-radius:5px">Welcome to Our Service</td></tr><tr><td style="padding:20px;color:#333;font-size:16px;line-height:1.5"><p>Dear ${user.name},</p><p>Thank you for signing up for our service. We are excited to have you on board!</p><p>Please confirm your email address by clicking the button below:</p><p style="text-align:center"><a href="http://localhost:8000/${user.email}" style="display:inline-block;padding:10px 20px;font-size:16px;color:#fff;background-color:#0073e6;text-decoration:none;border-radius:5px">Confirm Email</a></p><p>If you have any questions, feel free to reply to this email.</p><p>Best regards,<br>The [Service] Team</p></td></tr><tr><td style="padding:20px;text-align:center;color:#777;font-size:12px;border-top:1px solid #ddd;background-color:#f4f4f4;border-bottom-left-radius:5px;border-bottom-right-radius:5px">&copy; 2024 [Service]. All rights reserved.<br>1234 Service Street, City, State, 12345</td></tr></table></td></tr></table></body></html>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>


    res.send({
      message: "Registration successful",
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      registrationDate: user.registrationDate,
    });
  });
};

module.exports = registrarUser;
