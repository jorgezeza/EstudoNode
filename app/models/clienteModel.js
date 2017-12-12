
var db = require('../../config/db.js');

module.exports = function () {
    this.all = function (retorno) {

        var con = db();
        return con.query('select * from clientes', retorno);
        // console.log(retorno);
    };

    this.find = function (id, retorno) {

        var con = db();
        return con.query('select * from clientes where id = ?', id, retorno);
        console.log(con.query);
    };

    this.save = function (dados, retorno) {

        var con = db();
        return con.query('insert into clientes set ?',dados, retorno);
    };
    return this;
};

//Aqui vai os outros métodos...
//Exp:. Excluir, Alterar, Inserir