const express = require('express');
const app =  express();

const { port } = require('./config/environment');

// const mongoose = require('mongoose');

app.listen(port, () => console.log(`listening on port ${[port]}`));
