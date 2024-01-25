const express = require('express');
const router = express.Router();

var picture_controller = require('../controllers/pictureController');

router.get('/', picture_controller.index);

router.get('/picturesList', picture_controller.picture_list);

router.get('/create', picture_controller.picture_create_get);

router.post('/create', picture_controller.picture_create_post);

router.get('/:id', picture_controller.picture_info);

router.get('/update/:id', picture_controller.picture_update_get);

router.post('/update/:id', picture_controller.picture_update_post);

router.delete('/delete', picture_controller.picture_delete_post);

console.log("router gotowy");

module.exports = router;
