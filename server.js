const express = require('express');
const mongoose = require('mongoose');

const passport = require('passport');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const comments = require('./routes/api/comments');
const profiles = require('./routes/api/profiles');

const app = express();
//Middleware
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));

require('./config/passport')(passport);
//DB Config
const db = require('./config/keys').mongoURI;
//Connect to Mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDb connected');
  })
  .catch(err => console.log(err));

//Use Routes
app.use('/api/users', users);
app.use('/api/comments', comments);
app.use('/api/profiles', profiles);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
