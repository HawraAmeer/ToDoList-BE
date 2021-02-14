const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    name: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, unique: true },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "middle",
    },
    deadline: { type: DataTypes.DATE },
  });

  SequelizeSlugify.slugifyModel(Task, {
    source: ["name"],
  });

  return Task;
};
