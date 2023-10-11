var cartaoModel = require("../models/cartaoModel");

function listar(req, res) {
    
    var numero = req.body.numeroServer;

    cartaoModel.listar(numero)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {

    // dados usuario
    var nome = req.body.nomeServer;
    var numero = req.body.numeroServer;
    var data_expiracao = req.body.data_expiracaoServer;
    var codigo_seguranca = req.body.codigo_segurancaServer;
    var fkTipoCartao = req.body.fkTipoCartaoServer;
    var fkBandeiraCartao = req.body.fkBandeiraCartaoServer;


        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        cartaoModel.cadastrar(nome, numero, data_expiracao, codigo_seguranca, fkTipoCartao,
             fkBandeiraCartao
            )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    cadastrar,
    listar
}