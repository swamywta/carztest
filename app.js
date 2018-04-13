var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');
var router = express.Router();
var db = mongo.connect("mongodb://localhost:27017/testcarz", function(err, res){
  if(err){
    console.log(err);
  }
  else {
    console.log('Connected to ' + db, ' + ', response);
  }
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});
var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
     res.setHeader('Access-Control-Allow-Credentials', true);
     next();
});

var Schema = mongo.Schema;
var ProjectsSchema = new Schema({
  name: { type: String },
  description: { type: String },
}, { versionKey: false});
var model = mongo.model('projects', ProjectsSchema, 'users');

app.post("/apis/createProject", function(req, res){
  var mod = new model(req.body);
  mod.save(function(err, data){
    if(err){
      res.send(err);
    }
    else {
      res.send({data: "Project created!"});
    }
  })
});
app.get("/apis/getProjects", function(req, res){
  model.find({}, function(err, projects){
    if(err){
      res.send(err)
    }
    else {
      res.send({
        data: projects
      })
    }
  })
})
app.listen(8080, function (){
  console.log('Port: 8080');
})
