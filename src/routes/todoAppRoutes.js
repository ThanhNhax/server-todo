const express = require('express');
const { showAllTodos, createTodo, deleteTodoById, updateTodoById } = require('../controllers/todoAppController');
const  middwareController = require('../controllers/middwareController');

const router = express.Router();

//routes

router.get('/',middwareController.checkToken,  showAllTodos);
router.post('/create', createTodo);
router.delete('/:id', deleteTodoById);
router.patch('/:id', updateTodoById)
// router.get('/todo/:id', getById);
// router.put('/todo/:id', updateTodo);
module.exports = router;
