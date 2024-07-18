let Blog = require ("../model/blogModel")


let blogGetController = (req, res)=>{ 
   // const {title, description, image, postedBy} = req.body




    res.send({message: "Blog get Successfull"})
}




module.exports = blogGetController