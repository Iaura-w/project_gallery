const express = require('express');
const router = express.Router();
const imageController = require('../controllers/image');

router.get('/', imageController.listImages);
router.post('/', imageController.createImage);
router.get('/:id', imageController.readImage);
router.put('/:id', imageController.updateImage);
router.delete('/:id', imageController.deleteImage);

module.exports = router;
