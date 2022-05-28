const express = require('express');

const app = express();
require('./Database/mongoose');
app.use(express.json());

const User = require('./models/userSchema');
app.use(require('./router/auth'));

app.listen(3000, (err) => {
  if (err) {
    console.log('Error', err);
  }
  console.log(`Server is running on port 3000`);
});
