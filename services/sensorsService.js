var fs = require ('fs');

var sensorFilePath = 'db/sensors.json';

var loadFileSensors = function(){
  var fileData = fs.readFileSync(sensorFilePath, 'utf8'); // ler arquivos do banco 
  var sensors = JSON.parse(fileData);

  return sensors;
}

var saveFileSensors = function(sensors) {
  var data = JSON.stringify(sensors);
  fs.writeFileSync(sensorFilePath, data, 'utf8');
}

var getSensors = function() {
  var sensors = loadFileSensors();
  return sensors;
}

var saveSensors = function(newSensor) {
  var posts = loadFileSensors();
  sensors.push(newSensor);
  saveSensors(sensors);
}

module.exports = {
getSensors: getSensors, 
  saveSensors: saveSensors  // controle de acesso a dados em outras partes do sistema.
}