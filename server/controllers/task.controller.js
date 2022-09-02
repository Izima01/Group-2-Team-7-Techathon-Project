const Task = require("../models/task.model");
const User = require("../models/user.model");

const getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
}

const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
}

const createTask = async (req, res, next) => {
    try {
        const { task, isCompleted, completedDate } = req.body;

        const newTask = await Task.create({
            user: req.user.id,
            task,
            isCompleted,
            completedDate
        })
        res.status(200).json(newTask);
    }
    catch(error) {
        res.status(400);
        next(new Error("Please fill in all details"));
    }
}

const updateTask = async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (task.user.toString() !== user.id) {
        res.status(400);
        next(new Error("Not authorized"));
    }

    // for (const data in req.body) {
    //     task[data] = req.body[data];
    //     console.log(task[data])
    // }

    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTask);
        // task.save();
    } catch (error) {
        res.status(400);
        next(new Error("This task does not exist on our server"));
    }
}

const deleteTask = async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    const user = await User.findById(req.user.id);

    if (task.user.toString() !== user.id) {
        res.status(400);
        next(new Error("Not authorized"));
    }

    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(400);
        next(new Error("This task does not exist on our server."));
    }
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}