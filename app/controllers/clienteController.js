
var clienteModel = require('../models/clienteModel')();

module.exports.index = function (req, res) {
    clienteModel.all(function (erro, resultado) {
        res.render('site/home.ejs', { clientes: resultado,erros:{}, dados:{}});
    });
};

module.exports.store = function (req, res) {
    var dados = req.body;

    req.assert('nome', 'Preencha um Nome').notEmpty();
    req.assert('email', 'Preencha um E-mail').notEmpty();
    req.assert('nome', 'Nome deve ter de 3 á 20 caracteres').len(3,20);
    req.assert('email', 'Preencha um E-mail Válido').isEmail();

    var validacaoErros = req.validationErrors();
    if (validacaoErros) {
    clienteModel.all(function (erro, resultado) {
        res.render('site/home.ejs', { clientes: resultado,erros:validacaoErros, dados:dados});
    });
        return;
    }


    clienteModel.save(dados, function (erro, resultado) {
        if (!erro) {
            res.redirect('/home');
        } else {
            console.log("Erro ao adicionar  o cliente");
            res.redirect('/home');
        }
    });
};

module.exports.show = function (req, res) {
    clienteModel.find(req.params.id, function (erro, resultado) {
        if (resultado[0] && !erro) {
            res.render('site/detalhe.ejs', { cliente: resultado[0] });
        } else {
            console.log("Esse cliente não existe");
            res.redirect('/home');
        }

    });

};