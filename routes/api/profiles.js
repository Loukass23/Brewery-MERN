const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Import models
const User = require('../../models/User');
const Profile = require('../../models/Profile');

/*  POST api/profile/
    desc: Create profile 
    access: Private
 */
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);
module.exports = router;
