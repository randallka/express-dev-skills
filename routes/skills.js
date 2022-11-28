var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills'); 

router.get('/', skillsController.index);
router.get('/new', skillsController.new);
// router.get('/:id/edit', skillsController.edit);
router.get('/:id', skillsController.show);
router.post('/', skillsController.create);
router.delete('/:id', skillsController.delete); 

module.exports = router;
  