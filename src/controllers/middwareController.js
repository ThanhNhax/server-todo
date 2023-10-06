const jwt = require('jsonwebtoken');

const middwareController = {
  // check token
  checkToken: (req, res, next) => {
    // nhan token tu req gui len, dung split de lay
    const accessToken = req.headers.authorization.split(' ')[1];
    if (accessToken) {
      jwt.verify(accessToken, process.env.SECRRTKRY, (err, user) => {
        if (err) {
          return res.status(403).json({ message: 'Token is not valid!' });
        }
        return next();
      });
    } else {
      return res.status(401).json({ message: 'You`re not authenticated!' });
    }
  },
};

module.exports = middwareController;
