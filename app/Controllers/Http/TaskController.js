"use strict";

const Task = use("App/Models/Task");

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  async index({ params }) {
    const tasks = Task.query()
      .where("project_id", params.projects_id)
      .with("user")
      .with("project")
      .fetch();

    return tasks;
  }

  async store({ params, request }) {
    const data = request.only([
      "user_id",
      "title",
      "description",
      "due_date",
      "file_id"
    ]);

    const task = Task.create({ ...data, project_id: params.projects_id });

    return task;
  }

  async show({ params }) {
    const task = await Task.findOrFail(params.id);

    task.load("user");
    task.load("project");

    return task;
  }

  async update({ params, request }) {
    const data = request.only([
      "user_id",
      "title",
      "description",
      "due_date",
      "file_id"
    ]);

    const task = await Task.findOrFail(params.id);

    task.merge(data);

    await task.save();

    return task;
  }

  async destroy({ params, request, response }) {
    const task = await Task.findOrFail(params.id);

    await task.delete();
  }
}

module.exports = TaskController;
