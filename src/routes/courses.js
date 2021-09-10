const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.post('/store', courseController.store);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.get('/:id/edit', courseController.edit);

module.exports = router;
