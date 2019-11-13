var express = require('express');
var router = express.Router();
var uploader = require('../../middlewares/uploaderMiddleware');

var sensorsService = require('../../services/sensorsService');

router.get('/', function (req, res, next) {
  var sensors = sensorsService.getSensors();

  var data = {
    sensors: sensors
  };

  res.render('admin/sensors/index', data);
});

router.get('/create', function (req, res, next) {

  res.render('admin/sensors/create');
});

router.post('/create', uploader.single('image'), function (req, res, next) {
  var sensors = sensorsService.getSensors();

  var newId = sensors.length + 1;

  var newSensor = {};
  newSensor.id = newId;
  newSensor.name = req.body.name;

  sensorsService.saveSensors(newSensor);

  res.redirect('/admin/sensors');
});

module.exports = router;