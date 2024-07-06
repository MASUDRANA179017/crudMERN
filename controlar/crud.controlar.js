


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
      const user = await User.find()
      res.send(user)
  } )
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  