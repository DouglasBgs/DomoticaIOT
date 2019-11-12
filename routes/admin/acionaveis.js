var express = require ('express');
var router = express.Router ();
var acionaveisService = require ('../../services/acionaveisService');
var upload = require ('../../middlewares/uploaderMiddleware');

router.get('/', function(req, res, next) {
  var acionaveis = acionaveisService.getAcionaveis();

  var data = {
    acionaveis: acionaveis
  }

  res.render('admin/acionaveis/index', data);
});

router.get('/create', function(req, res, next){

  res.render('admin/projects/create');

});

router.post('/create', upload.single('image'), function(req, res, next){
  var projects = projectsService.getProjects();

  var newId = projects.length +1;

  var newProject = {};
  newProject.id = newId;
  newProject.title = req.body.title;
  newProject.description = req.body.description;
  newProject.image = req.file.filename;
  newProject.body = req.body.projectBody;

  projectsService.saveProjects(newProject);

  res.redirect('/admin/projects')

})



module.exports = router;

