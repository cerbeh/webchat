const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res, next) {
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `You've successfully registered, ${user.username}. Please login`,
        token,
        user
      });
    })
    .catch(next);
}


function login(req, res, next) {
  User
    .findOne({ $or: [{ email: req.body.usernameOrEmail }, { username: req.body.usernameOrEmail }] })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized 😡' });
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '12h' });
      res.json({
        user,
        token,
        message: `Welcome back, ${user.username}`
      });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
