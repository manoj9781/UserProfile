const mongoose = require('mongoose');


const db = "mongodb+srv://manoj:Manoj1234@cluster0.bqsisjb.mongodb.net/userProfile?retryWrites=true&w=majority"

mongoose
  .connect(db)
  .then(() => {
    console.log('database connection succesful');
  })
  .catch((err) => {
    console.log(`database Not connected`, err);
  });