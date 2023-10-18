const express = require('express');
const {
  showAllTodos,
  createTodo,
  deleteTodoById,
  updateTodoById,
  showTodosByUserId,
} = require('../controllers/todoAppController');
const middwareController = require('../controllers/middwareController');

const router = express.Router();

//routes

router.get('/', middwareController.checkToken, showAllTodos);
router.get('/:userId', middwareController.checkToken, showTodosByUserId);
router.post('/create', middwareController.checkToken, createTodo);
router.delete('/:id', middwareController.checkToken, deleteTodoById);
router.patch('/:id', middwareController.checkToken, updateTodoById);
// router.get('/todo/:id', getById);
// router.put('/todo/:id', updateTodo);
module.exports = router;
