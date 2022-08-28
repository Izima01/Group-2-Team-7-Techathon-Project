const getTasks = (req, res) => {
    res.status(200).json({"message": "Get tasks."});
}

const getTask = (req, res) => {
    res.status(200).json({"message": `Get task ${req.params.id}.`});
}

const createTask = (req, res) => {
    res.status(200).json({"message": "New task created."});
}

const updateTask = (req, res) => {
    res.status(200).json({"message": `Update task ${req.params.id}.`});
}

const deleteTask = (req, res) => {
    res.status(200).json({"message": `Delete task ${req.params.id}.`});
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}