const express = require("express");
<<<<<<< HEAD
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
=======
const { deleteBlog, updateBlog, getAll, getOne,  } = require("../controllers/blog-controllers");

const router = express.Router();

router.get('/', getAll);
router.route("/:id").delete(deleteBlog).patch(updateBlog).get(getOne);
>>>>>>> 935c427540045b787d2dad118ff3dc635b321ef7

module.exports = router;
