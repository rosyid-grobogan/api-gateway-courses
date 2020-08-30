const express = require('express');
const router = express.Router();
const mediaHandler = require('./handler/media');

/* POST */
router.post('/', mediaHandler.create);

module.exports = router;
