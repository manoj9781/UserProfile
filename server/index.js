const express = require('express');
const cors = require('cors');
const app = express();
require('./Database/mongoose');
app.use(express.json());
app.use(cors());

const User = require('./models/userSchema');
app.use(require('./router/auth'));

app.listen(5000, (err) => {
  if (err) {
    console.log('Error', err);
  }
  console.log(`Server is running on port 5000`);
});
