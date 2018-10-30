const express = require('express');
const app =  express();

const { port, dbURI } = require('./config/environment');
const routes = require('./config/routes');

const mongoose = require('mongoose');
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.Promise = require('bluebird');

app.use('/api', routes);

app.listen(port, () => console.log(`listening on port ${[port]}`));
