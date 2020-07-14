const express = require('express');
const router = express.Router();
const {getTodolist, createTask, updateTask, deleteTask, getTodolistEdit} = require('../controllers/controller');

// GET homepage todolist /todolist
router.get('/', getTodolist);
// GET homepage todolist /todolist
router.get('/edit/:id', getTodolistEdit);
// POST task to todolist /todolist
router.post('/', createTask)
// Put task in todolist /todolist/:id
router.put('/:id', updateTask)
// DELETE task in todolist /todolist/:id
router.delete('/:id', deleteTask);

module.exports = router;