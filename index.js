const express = require("express");
const mongoose = require("mongoose");
const app = express();

const User = require("./model/registrarUser.js");

// Middleware for parsing JSON
app.use(express.json());

// Database connection
mongoose
  .connect(
    "mongodb+srv://masud:47N5nG9gISkIg4Ob@cluster0.x1lclon.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database Successfully Connected");
  })
  .catch((error) => {
    console.error("Database Connection Error: ", error);
  });

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

app.post("/createuser", (req, res) => {
  const { firstName, lastName, email, phone, registrationDate } = req.body;

  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    userName: firstName + lastName,
    email: email,
    phone: phone,
    registrationDate: registrationDate,
  });
  newUser.save();
  res.send(newUser);
});

app.put("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(updateuser);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await User.findByIdAndDelete(id, req.body, {
      new: true,
    });
    res.send(deleteuser);
  } catch (error) {
    console.log(error);
  }
});


app.get("/userlist", async (req, res)=>{
    const user = await User.find(req.body)
    res.send(user)
} )

















