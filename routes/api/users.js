const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../../models/User');

/*  POST api/users/register
    desc: Register a new user
    access: Public
 */
router.post('/register', (req, res) => {
  /*First we use mongoose method 'findOne' to 
  make sure an account with email passed in 
  does not already exist */
  User.findOne({ email: req.body.email })
    /*Returns promise, if user with passed in email is 
    found we throw a 400 error and pass in our error message*/
    .then(user => {
      if (user) {
        return res.status(400).json({ email: 'Email already exists' });
      } else {
        /* If no user is returned then we take all fields
        passed in from our front end form and create an object 
        to push to our db once we hash our password with bcrypt*/
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          img: req.body.img,
          password: req.body.password
        });
        /* bcrypt- This is hella confusing */
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              /* Save user to db*/
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
});
module.exports = router;
