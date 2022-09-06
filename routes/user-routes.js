const express = require("express");
const {
  signUp,
  signIn,
  deleteUser,
  updateUser,
} = require("../controllers/user-controllers");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.route("/:id").delete(deleteUser).patch(updateUser);
module.exports = router;
