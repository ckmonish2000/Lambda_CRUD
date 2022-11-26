'use strict';
const io = require('./io')
const Todo = require('./model')

const getAllTasks = async (event) => {
  const data = await Todo.fetchAll();
  return data
};


const taskById = async (event) => {
  const { id } = io.params(event)
  const data = await Todo.fetchById(id);
  return data
}

const createTask = async (event) => {
  const body = io.input(event);
  const data = await Todo.put(body)
  return JSON.stringify({ message: "created task" })
}

const updateTask = async (event) => {
  const body = io.input(event);
  const data = await Todo.put(body)

  return JSON.stringify({ message: "updated task" })
}

const deleteTask = async (event) => {
  const { id } = io.params(event)
  const data = await Todo.deleteById(id);
  return JSON.stringify({ message: "deleted task with id = " + id })
}


module.exports = {
  getAllTasks,
  taskById,
  createTask,
  updateTask,
  deleteTask
}