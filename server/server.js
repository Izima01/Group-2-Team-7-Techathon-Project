const express = require("express");
const env = require("dotenv").config();
const colors = require("colors");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/error.middleware");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", require("./routes/task.route"));
app.use("/api/users", require("./routes/user.route"));
app.use("*", require("./middlewares/notFound.middleware"));
app.use(errorHandler);

connectDB();
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}.`))