const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const db = require('./database');

app.listen(port, () => {
  console.log(`Server run on ${port}`);
});