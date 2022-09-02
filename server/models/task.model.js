const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    task: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
        required: true
    },
    completedDate: {
        type: String,
        required: true
    }
}, {
    timestamps: [true, "Please add a task"]
});

module.exports = mongoose.model("Task", taskSchema);