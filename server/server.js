const express = require("express");
const env = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use("/api/tasks", require("./routes/task.route"));
app.use("*", require("./middlewares/notFound.middleware"));


app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}.`))