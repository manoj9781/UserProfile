const express = require('express');
const cors = require('cors');
const app = express();
require('./Database/mongoose');
app.use(express.json());
app.use(cors());
const port = 5000;

const User = require('./models/userSchema');
app.use(require('./router/auth'));

app.listen(port, (err) => {
  if (err) {
    console.log('Error', err);
  }
  console.log(`Server is running on port ${port}`);
});
