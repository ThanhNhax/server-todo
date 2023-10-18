const db = require('../db');

// show all todos
exports.showAllTodos = (req, res) => {
  const q = 'SELECT * FROM todos';
  db.query(q, (error, data) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  });
};
exports.showTodosByUserId = (req, res) => {
  const { userId } = req.params;
  const q = 'SELECT * FROM todos where userid = ' + userId;
  db.query(q, (error, data) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  });
};

// create todo
exports.createTodo = (req, res) => {
  const { title, isCompleted, userId } = req.body;
  console.log(title, isCompleted, userId);
  // truyen firstName, lastName thi nho cho vao dai '' chuyen kieu varchar trong mysql
  //   let q = `INSERT INTO todos (first_name, last_name)
  //             VALUES('${first_name}','${last_name}')`;

  const q = `INSERT INTO todos SET ?`;
  db.query(q, { title, is_completed: isCompleted, userId }, (error) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json('INSERT INTO successfully!');
  });
};

// delete todo by id
exports.deleteTodoById = (req, res) => {
  const { id } = req.params;
  console.log({ id });
  const q = `delete from todos
  where id =${id}`;
  db.query(q, (error, data) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json({ ...data, message: 'deleted successfully' });
  });
};

// patch todo by id
exports.updateTodoById = (req, res) => {
  const { id } = req.params;
  const { is_completed, title } = req.body;
  console.log('updateTodoById: ', is_completed, title);
  const q = `UPDATE todos 
  set is_completed =${is_completed} ,
  title = '${title}'
  where id = ${id}`;
  db.query(q, (error, data) => {
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  });
};

// // update todos with
// exports.updateTodo = (req, res) => {
//   const { title,isComplate } = req.body;
//   const q = ` UPDATE todos
//               SET first_name = '${firstName}', last_name = '${lastName}'
//               WHERE id = ${req.params.id};
//             `;
//   db.query(q, (error, data) => {
//     if (error) return res.status(500).json({ error });
//     return res.status(200).json(data);
//   });
// };
