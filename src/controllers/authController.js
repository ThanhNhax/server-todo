const db = require('../db/index');
const bcrypt = require('bcrypt');
const e = require('express');

const jwt = require('jsonwebtoken');

class AuthController {
  register(req, res) {
    try {
      const { email, password, name } = req.body;
      console.log(email, password, name);
      //  hash: bam cai password ra

      const salt = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS));
      const hashedPassword = bcrypt.hashSync(password, salt);
      const q = `insert into users(email, password,name) values('${email}','${hashedPassword}','${name}')`;
      db.query(q, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        return res
          .status(200)
          .json({ result, message: 'Created successfully!' });
      });
    } catch (e) {
      return res.status(500).json({ error: 'Error handle hash password' });
    }
  }

  login(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    //hash password
    //query db
    const q = `select * from users
    where email = '${email}'`;
    db.query(q, (err, result) => {
      if (err) return res.status(404).json({ error: err });
      // console.log(result[0].password)
      // check password
      if (result[0] === undefined)
        return res.status(400).json({ error: ' Acount not found! ' });
      bcrypt.compare(password, result[0].password, (err, data) => {
        if (err) return res.status(500).json({ error: err });
        if (data) {
          //tao ra ma jwt
          const token = jwt.sign(
            { email: result[0].email },
            process.env.SECRRTKRY
          );
          const { password, ...rest } = result[0];
          const resDate = {
            token: token,
            ...rest,
          };
          return res.status(200).json(resDate);
        }
      });
    });
  }
}

module.exports = new AuthController();
