const Blog = require("../models/blog-model");

//User blog  handler
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(400).json({
        status: "fail",
        message: `There is no blog with the id ${req.params.id}`,
      });
    }
    const title = req.body.title === undefined ? blog.title : req.body.title;
    const blogBody =
      req.body.blogBody === undefined ? blog.blogBody : req.body.blogBody;
    const update = { title, blogBody };
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        blog: updatedBlog,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(400).json({
        status: "fail",
        message: `There is no blog with the id ${req.params.id}`,
      });
    }
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "successful deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

<<<<<<< HEAD
exports.createBlog = async (req, res) => {
  try {
    if (!req.body.author) req.body.author = req.params.authorId;
    const blog = await Blog.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
=======
//Get All Blogs
exports.getAll = async (req, res) => {
  try{
      const blog = await Blog.find()
      res.status(200).json({
          results: blog.length,
          data: blog
      })
  } catch (err) {
      res.status(400).json({
          status: 'fail',
          message: err
      })
  }
}

//Get One Blog
exports.getOne =  async (req, res) => {
  try{
      const blog = await Blog.findById(req.params.id)
      res.status(200).json({
          data: blog
      })
  } catch (err) {
      res.status(400).json({
          status: 'fail',
          message: err
      })
  }
}
>>>>>>> 935c427540045b787d2dad118ff3dc635b321ef7
