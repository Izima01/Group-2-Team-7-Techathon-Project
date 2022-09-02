const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth.middleware");
const {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/task.controller");

router.route("/").get(protect, getTasks).post(protect, createTask);

router.route("/:id").get(protect, getTask).put(protect, updateTask).delete(protect, deleteTask);


module.exports = router;