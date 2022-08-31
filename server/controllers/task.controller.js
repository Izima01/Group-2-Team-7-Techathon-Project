const Task = require("../models/task.model");

const getTasks = async (req, res) => {
    const tasks = await Task.find();
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
    const task = await Task.findByIdAndUpdate(req.params.id);
    for (const data in req.body) {
        task[data] = req.body[data];
    }
    try {
        res.status(200).json(task);
        task.save();
    } catch (error) {
        res.status(400);
        next(new Error("This task does not exist on our server"));
    }
}

const deleteTask = async (req, res, next) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    try {
        res.status(200).json(task);
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