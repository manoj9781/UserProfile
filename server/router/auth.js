const express = require('express');
const router = express.Router();
require('../Database/mongoose');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
  res.send(`Hello Manoj`);
});

router.post('/register', async (req, res) => {
  const { name, email, phone, course, country, date } = req.body;
  if (!name || !email || !phone || !course || !country) {
    return res.status(422).json({ Error: 'Please fill the required field' });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      const newValues = {
        $set: {
          name: name,
          phone: phone,
          course: course,
          country: country,
          date: date,
        },
      };
      User.findOneAndUpdate({ email: email }, newValues, function (err, res) {
        if (err) throw err;
      });
      return res.status(202).json({ message: 'Data Updated succesfully' });
    }
    const user = new User({ name, email, phone, course, country, date });
    await user.save();
    res.status(201).json({ message: 'User registered Succesfully' });
  } catch (error) {
    console.log(error);
  }
});

let user;
router.post('/getdetails', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: "Please enter Email" });
        }
       user = await User.findOne({ email: email });
      return res.status(200).json({ message: "User found" });
        console.log(user);
    } catch (error) {
        console.log(error);
    }
})
router.get('/details', async (req, res) => {
  console.log(user);
  res.send(user);
})

module.exports = router;
