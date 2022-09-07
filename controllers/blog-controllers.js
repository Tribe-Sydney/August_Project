const Blog = require("../models/blog-model");
const User = require("../models/user-model");
const { findById } = require("../models/user-model");

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

exports.createBlog = async (req, res) => {
  try {
    if (!req.body.author) req.body.author = req.params.authorId;
    const user = await User.findById(req.body.author);
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Author is not a user",
      });
    }
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

//Get All Blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: {
        blogs,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

//Get One Blog
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
