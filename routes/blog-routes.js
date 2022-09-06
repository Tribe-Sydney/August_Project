const express = require("express");
const { deleteBlog, updateBlog, getAll, getOne,  } = require("../controllers/blog-controllers");

const router = express.Router();

router.get('/', getAll);
router.route("/:id").delete(deleteBlog).patch(updateBlog).get(getOne);

module.exports = router;
