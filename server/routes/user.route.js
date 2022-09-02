const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const {
    registerUser,
    loginUser,
    readUser,
    getUsers,
    deleteUsers
} = require("../controllers/user.controller");

router.post("/", registerUser);

router.get("/", getUsers);
router.delete("/", deleteUsers);

router.post("/login", protect, loginUser);

router.post("/user", protect, readUser);

module.exports = router;