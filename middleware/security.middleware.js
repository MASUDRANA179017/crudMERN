let security = (req, res, next) => {
  if ((req.headers.authorization == "1234567890987654321")) {
    console.log("ami secure middleware ");
    next();
  }else{
    console.log("apni Authorization user na");
  }
};

module.exports = security;
