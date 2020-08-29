const express = require('express');
const router = express.Router();
const mediaHandler = require('./handler/media');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('media');
});

router.post('/', mediaHandler.create);

module.exports = router;
