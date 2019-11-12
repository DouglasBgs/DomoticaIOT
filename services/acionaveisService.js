var fs = require ('fs');

var acionavelFilePath = 'db/acionaveis.json';

var loadFileAcionaveis = function(){
  var fileData = fs.readFileSync(acionavelFilePath, 'utf8'); // ler arquivos do banco 
 var acionaveis = JSON.parse(fileData);

  return acionaveis;
}

var saveFileAcionaveis = function(acionaveis) {
  var data = JSON.stringify(acionaveis);
  fs.writeFileSync(acionavelFilePath, data, 'utf8');
}

var getAcionaveis = function() {
  var acionaveis = loadFileAcionaveis();
  return acionaveis;
}

var saveAcionaveis = function(newAcionavel) {
  var acionaveis = loadFileAcionaveis();
  acionaveis.push(newAcionavel);
  saveFileAcionaveis(acionaveis);
}

module.exports = {
getAcionaveis: getAcionaveis, 
  saveAcionaveis: saveAcionaveis  // controle de acesso a dados em outras partes do sistema.
}