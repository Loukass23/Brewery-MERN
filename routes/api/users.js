const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../../models/User');
const keys = require('../../config/keys');

//Import Validation
const validateLoginInput = require('../../validation/login');
const validateRegisterInput = require('../../validation/register');

const router = express.Router();
/*  POST api/users/register
    desc: Register a new user
    access: Public
 */
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
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
/*  POST api/users/login
    desc: Return a Jason Web Token
    access: Public
 */
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  //Find user by email
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: 'User not found' });
    }
    //Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //Create a jwt payload with user information
        const payload = { id: user.id, name: user.name, img: user.img };
        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 28880 },
          (err, token) => {
            res.json({ success: true, token: 'Bearer ' + token });
          }
        );
      } else {
        return res.status(400).json({ password: 'Password is incorrect' });
      }
    });
  });
});
/*  POST api/users/current
    desc: Return current user
    access: Private
 */
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
module.exports = router;
