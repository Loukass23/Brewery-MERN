const express = require('express');
const router = express.Router();

/*  GET api/users/test
    desc: tests users route
    access: Public
 */
router.get('/test', (req, res) => {
  return res.json({ msg: 'Users works' });
});
module.exports = router;
