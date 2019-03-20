const express = require('express');
const router = express.Router();

/*  GET api/reviews/test
    desc: tests reviews route
    access: Public
 */
router.get('/test', (req, res) => {
  return res.json({ msg: 'Reviews works' });
});
module.exports = router;
