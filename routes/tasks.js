const express = require("express");

const controller = require("../controllers/taskController");

const router = express.Router();

router.param("taskId", async (req, res, next, taskId) => {
  const foundTask = await controller.fetchTasks(taskId, next);
  if (foundTask) {
    req.task = foundTask;
    next();
  } else next({ status: 404, message: "Task Not Found." });
});

router.post("/", controller.createTask);

router.get("/", controller.taskList);

router.put("/:taskId", controller.updateTask);

router.delete("/:taskId", controller.deleteTask);

module.exports = router;
