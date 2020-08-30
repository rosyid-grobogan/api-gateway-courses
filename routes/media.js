const express = require('express');
const router = express.Router();
const mediaHandler = require('./handler/media');

/* GET */
router.get('/', mediaHandler.getAll);

/* POST */
router.post('/', mediaHandler.create);

/* DELETE */
router.delete('/:id', mediaHandler.destroy);

module.exports = router;
