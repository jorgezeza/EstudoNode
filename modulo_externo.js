// var teste = "meu módulo externo";

//Tem que esportar para conseguir acessar de outro lugar
//tem que seguir a especificação do common.js

//module.exports = teste;

module.exports = function(){
    var teste = "meu módulo externo.ejs";
    return teste;
}