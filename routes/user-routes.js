const express = require("express");
const {
  signUp,
  signIn,
  deleteUser,
  updateUser,
  getAll,
  getOne
} = require("../controllers/user-controllers");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signin", getAll);
router.route("/:id").delete(deleteUser).patch(updateUser).get(getOne);
module.exports = router;
