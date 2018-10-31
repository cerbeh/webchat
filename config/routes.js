const router = require('express').Router();
const users = require('../controllers/users');


router.get('/users', users.index);

module.exports = router;
