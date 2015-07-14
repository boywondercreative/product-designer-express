var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/productdesigner.php', function(req, res, next) {
  res.render('templates/product-designer', req.body);
});

router.post('/canvaserror.php', function(req, res, next) {
  res.render('templates/canvas-error');
});

router.post('/editorbox.php', function(req, res, next) {
  res.render('templates/editor-box', req.body);
});
module.exports = router;