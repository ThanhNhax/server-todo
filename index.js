const express = require('express');
const path = require('path');
const cors = require('cors');
const todoRouter = require('./src/routes/todoAppRoutes');
const authRouter = require('./src/routes/authRoutes');
// dung bien moi truong
require('dotenv').config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRouter);
app.use('/api/todos', todoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
