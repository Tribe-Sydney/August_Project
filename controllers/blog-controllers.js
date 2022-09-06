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
