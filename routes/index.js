const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller')

console.log('Router Connected Successfully')
router.use('/api',require('./api'));
router.get('/',homeController.home);

module.exports = router;