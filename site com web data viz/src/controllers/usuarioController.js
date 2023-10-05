var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function recuperarUsuario(req, res) {
    var cpf = req.body.cpfServer;
    if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else {
        usuarioModel.recuperarUsuario(cpf)
            .then(
                function (resultado) {
                    console.log(`\n Resultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string
                    if (resultado.length >= 1) {
                        console.log(resultado);
                        res.json(resultado[resultado.length - 1]);
                    } else {
                        res.status(403).send("Usuario não cadastrado!")
                    }
                }
            )
    }
}

function cadastrarUsuario(req, res) {
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var cpf = req.body.cpfServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    if (nome == undefined) {
        res.status(400).send("Seu NOME está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu SOBRENOME está undefined!")
    } else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!")
    } else if (email == undefined) {
        res.status(400).send("Seu EMAIL está undefined!")
    } else if (senha == undefined) {
        res.status(400).send("Sua SENHA está undefined!")
    } else if (fkEmpresa == undefined) {
        res.status(400).send("Sua fkEmpresa está undefined!")
    } else {
        usuarioModel.cadastrarUsuario(nome, sobrenome, cpf, email, senha, fkEmpresa)
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
}

function cadastrarTelefone(req, res) {
    var telFixo = req.body.telFixoServer;
    var telCel = req.body.telCelServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (telFixo == undefined) {
        res.status(400).send("Seu TELEFONE FIXO está undefined!");
    } else if (telCel == undefined) {
        res.status(400).send("Seu TELEFONE CELULAR está undefined!");
    } else {
        usuarioModel.cadastrarTelefone(telCel, telFixo, fkUsuario)
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
}

module.exports = {
    recuperarUsuario,
    cadastrarUsuario,
    cadastrarTelefone
}