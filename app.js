const express = require("express");
const cors = require("cors");
const db = require("./db/models");
const taskRoutes = require("./routes/tasks");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/tasks", taskRoutes);

app.use((req, res, next) => {
  next({ status: 404, message: "Path Not Found!" });
});

app.use((err, rq, res, next) => {
  res
    .status(err.status ?? 500)
    .json({ message: err.message ?? "Internal Server Error." });
});

db.sequelize.sync();

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
