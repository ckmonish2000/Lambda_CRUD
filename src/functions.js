'use strict';
const Todo = require('./model')

const getAllTasks = async (event) => {
  const data = await Todo.fetchAll();
  return data
};


const taskById = async (event) => {
  console.log(event)
  return true
}

const updateTask = async (event) => { }

const deleteTask = async (event) => { }


module.exports = {
  getAllTasks,
  taskById
}