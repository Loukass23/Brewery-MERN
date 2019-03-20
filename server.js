const express = require('express');
const mongoose = require('mongoose');
const app = express();

const users = require('./routes/api/users');
const reviews = require('./routes/api/reviews');
const profiles = require('./routes/api/profiles');

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
app.use('/api/reviews', reviews);
app.use('/api/profiles', profiles);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
