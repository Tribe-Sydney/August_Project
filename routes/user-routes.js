const express = require("express");
const {
  signUp,
  signIn,
  deleteUser,
  updateUser,
  getAll,
  getOne,
} = require("../controllers/user-controllers");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.route("/:id").delete(deleteUser).patch(updateUser).get(getOne);
router.get("/", getAll);
module.exports = router;
