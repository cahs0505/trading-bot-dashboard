const router = require('express').Router();

router.use('/', require('./accounts'));
router.use('/', require('./portfolio'));

module.exports = router;