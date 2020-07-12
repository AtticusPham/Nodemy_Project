const express = require('express');
const router = express.Router();
const {getTodolist, createTask, updateTask, deleteTask} = require('../controllers/controller');

// GET homepage todolist /todolist
router.get('/', getTodolist);
// POST task to todolist /todolist
router.post('/', createTask)
// Put task in todolist /todolist/:id
router.put('/:id', updateTask)
// DELETE task in todolist /todolist/:id
router.delete('/:id', deleteTask);

module.exports = router;