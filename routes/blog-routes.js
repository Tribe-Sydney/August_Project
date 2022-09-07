const express = require("express");
const {
  deleteBlog,
  updateBlog,
  createBlog,
  getAllBlogs,
  getBlog,
} = require("../controllers/blog-controllers");

const router = express.Router();

router.route("/:id").delete(deleteBlog).patch(updateBlog).get(getBlog);
router.post("/:authorId?", createBlog);
router.get("/", getAllBlogs);

module.exports = router;
