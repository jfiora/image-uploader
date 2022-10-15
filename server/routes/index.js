var express = require('express');
var router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/upload.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const upload = multer();
router.post('/upload', uploadController.upload, uploadController.uploadFile, (req, res, next) => {
  const { file } = req;

  

})

module.exports = router;
