const express = require("express");
const { deleteBlog, updateBlog } = require("../controllers/blog-controllers");

const router = express.Router();

router.route("/:id").delete(deleteBlog).patch(updateBlog);

module.exports = router;
