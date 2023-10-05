const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// open the mysql connection
db.connect((err) => {
  if (err) console.log('Ket noi CSDL khong thanh cong');
  else console.log('Connected');
});

module.exports = db;
