
module.exports = function(){
var express = require('express'); //faz uma requisição do express
var app = express();              //atribui o express para a variável e executa



var bodyParser = require('body-parser');

var expressValidator = require('express-validator');

app.set('view engine ','ejs');
app.set('views','./app/views');

//require('../app/routes/web.js')(app);     //passou app como parametro e o caminho

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());



var rotas = require('../app/routes/web.js');
rotas(app);

app.listen(8000, function(){
    console.log("localhost:8000");    
});

};
