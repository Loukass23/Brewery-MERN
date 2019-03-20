const express = require('express');
const router = express.Router();

/*  GET api/profile/test
    desc: tests profile route
    access: Public
 */
router.get('/test', (req, res) => {
  return res.json({ msg: 'Profiles works' });
});
module.exports = router;
