let Blog = require ("../model/blogModel")


let blogPostController = (req, res)=>{ 
    const {title, description, image, postedBy} = req.body


   // console.log(req.file.originalname);


    let blog = new Blog({
        title: title,
        description: description,
        image: image,
        postedBy: postedBy
    })

    blog.save()
    res.send({message: "Blog post Successfull"})
}



module.exports = blogPostController