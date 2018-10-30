const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI }= require('../config/environment');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropdatabse()
    .then(() => User.create([{
      username: 'userOne',
      email: 'a@a',
      password: 'one',
      passwordConfirmation: 'one'
    },{
      username: 'userTwo',
      email: 'b@b',
      password: 'two',
      passwordConfirmation: 'two'
    },{
      username: 'userThree',
      email: 'c@c',
      password: 'three',
      passwordConfirmation: 'three'
    }]))
    .then(users => console.log(`${users.length} kendoka created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
