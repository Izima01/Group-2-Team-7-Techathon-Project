const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        isCompleted: Boolean,
        completedDate: String,
        required: true,
    }
}, {
    timestamps: [true, "Please add a task"]
});

module.exports = mongoose.Model("Task", taskSchema);