const express = require("express");
const {
  deleteBlog,
  updateBlog,
  createBlog,
  getBlogs,
  getUser,
} = require("../controllers/blog-controllers");

const router = express.Router();

router.route("/:id").delete(deleteBlog).patch(updateBlog).get(getUser);
router.post("/:authorId", createBlog);
router.get("/", getBlogs);

module.exports = router;
