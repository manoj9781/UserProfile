const mongoose = require('mongoose');


const db = process.env.Database;

mongoose
  .connect(db)
  .then(() => {
    console.log('database connection succesful');
  })
  .catch((err) => {
    console.log(`database Not connected`, err);
  });