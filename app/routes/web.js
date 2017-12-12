
var clienteController = require('../controllers/clienteController');

module.exports = function(app){
    
app.get('/contato', function(req,res){
    res.render('site/contato.ejs');
});

app.get('/home', function(req,res){
  // console.log(clienteModel.all());
  clienteController.index(req,res);  
});


app.post('/home', function(req,res){
  // console.log(clienteModel.all());
  clienteController.store(req,res);  
});

app.get('/detalhe/:id', function(req,res){
//   console.log(req.params.id);
  clienteController.show(req,res);
});
};