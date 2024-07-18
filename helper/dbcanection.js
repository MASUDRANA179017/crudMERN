

const mongoose = require("mongoose");

// Database connection
function dbConnection (){
  mongoose.connect(
    `${process.env.MONGODB_URL}`
  )
  .then(() => {
    console.log("Database Successfully Connected");
  })
  .catch((error) => {
    console.error("Database Connection Error: ", error);
  });

}




module.exports = dbConnection