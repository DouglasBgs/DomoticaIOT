var fs = require('fs');

var sensorsFilePath = 'db/temp_sensors.json';

var loadFileSensors = function() {
  var fileData = fs.readFileSync(sensorsFilePath, 'utf8');
  var sensors = JSON.parse(fileData);

  return sensors;
}

var saveFileSensors = function(sensors) {
  var data = JSON.stringify(sensors);
  fs.writeFileSync(sensorsFilePath, data, 'utf8');
}

var getSensors = function() {
  var sensors = loadFileSensors();
  return sensors;
}

var saveSensors = function(newSensor) {
  var sensors = loadFileSensors();
  sensors.push(newSensor);
  saveFileSensors(sensors);
}

module.exports = {
  getSensors: getSensors,
  saveSensors: saveSensors
}