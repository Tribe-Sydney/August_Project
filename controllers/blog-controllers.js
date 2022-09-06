const Blog = require("../models/blog-model")

//User blog  handler










exports.deleteBlog = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if(!blog){
        return res.status(400).json({
          status: 'fail',
          message: `There is no blog with the id ${req.params.id}`
        })
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
