const express = require('express');
const router = express.Router();

var picture_controller = require('../controllers/pictureController');

router.get('/', picture_controller.index);

router.get('/picturesList', picture_controller.picture_list);

console.log("router gotowy");

module.exports = router;
