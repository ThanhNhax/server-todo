const db = require('../db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secretKey = 'thanhnhaxngulam';

class usersController {
  getUserEmail(req, res) {
    const { email } = req.params;
    console.log(email);
    const q = `SELECT * FROM todolist.users
    where email = '${email}'`;
    db.query(q, (err, result) => {
      if (err) {
        return res.status(401).json({
          error: err,
        });
      }
      return res
        .status(200)
        .json({ email: result[0].email, name: result[0].name });
    });
  }
}

module.exports = new usersController();
