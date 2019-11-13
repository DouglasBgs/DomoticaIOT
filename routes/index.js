var express = require('express');
var router = express.Router();
var sensorsService = require('../services/sensorsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var sensors = sensorsService.getSensors();

  res.render('index', { title: 'Blog', sensors: sensors });
});

router.get('/sensors/:postId', function(req, res, next) {
  var sensorId = req.params.sensorId;

  var sensor = sensorsService.getSensors();

  var sensor = sensors.filter((sensor) => sensor.id == sensorId)[0];

  res.render('sensor', { title: sensor.title, sensor: sensor });

});

module.exports = router;
