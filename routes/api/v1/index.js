const express = require('express');
const router = express.Router();
const questionController = require('../../../controller/questions_controller');
const optionController = require('../../../controller/options_controller');

//Question Routes
router.post('/create', questionController.createQuestion);
router.post('/:id/options/create', questionController.addOptions);
router.delete('/:id/delete', questionController.deleteQuestion);
router.get('/:id', questionController.viewQuestion);

//Option routes
router.post('/options/:id/addVote', optionController.addVote);
router.delete('/:id/option/delete', optionController.deleteOption);

module.exports = router;