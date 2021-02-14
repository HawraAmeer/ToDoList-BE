const { Task } = require("../db/models");

exports.fetchTasks = async (taskId, next) => {
  try {
    return await Task.findByPk(taskId);
  } catch (error) {
    next(error);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

exports.taskList = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    await req.task.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    await req.task.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
