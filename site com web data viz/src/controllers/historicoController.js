var historicoModel = require("../models/historicoModel");

function historico(req, res) {
    
    var id = req.params.id;
    
        historicoModel.recuperarHistorico(id)
            .then(
                function (resultado) {
                    console.log(`\n Resultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string
                    if (resultado.length >= 1) {
                        console.log(resultado);
                        res.json(resultado);
                    } else {
                        res.status(403).send("historico não existe!")
                    }
                }
            )
    }
function cargo(req, res) {

    var id = req.params.id;
    
        historicoModel.recuperarCargo(id)
            .then(
                function (resultado) {
                    console.log(`\n Resultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string
                    if (resultado.length >= 1) {
                        console.log(resultado);
                        res.json(resultado);
                    } else {
                        res.status(403).send("historico não existe!")
                    }
                }
            )
    }
function funcionario(req, res) {
    
    var id = req.params.id;
        
        historicoModel.recuperarFuncionario(id)
            .then(
                function (resultado) {
                    console.log(`\n Resultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string
                    if (resultado.length >= 1) {
                        console.log(resultado);
                        res.json(resultado);
                    } else {
                        res.status(403).send("historico não existe!")
                    }
                }
            )
    }
function remover(req, res) {

var id = req.params.id;
var id2 = req.params.id2
    
    historicoModel.removerFuncionario(id,id2)
        .then(
            function (resultado) {
                console.log(`\n Resultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string
                res.json(resultado);
            }
        )
}
function user(req, res) {

    var id = req.params.id;
    
        historicoModel.recuperarUser(id)
            .then(
                function (resultado) {
                    console.log(`\n Resultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string
                    if (resultado.length >= 1) {
                        console.log(resultado);
                        res.json(resultado);
                    } else {
                        res.status(403).send("historico não existe!")
                    }
                }
            )
    }
function ocorrencia(req, res) {

var id = req.params.id;

    historicoModel.recuperarOcorrencia(id)
        .then(
            function (resultado) {
                console.log(`\n Resultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string
                if (resultado.length >= 1) {
                    console.log(resultado);
                    res.json(resultado);
                } else {
                    res.status(403).send("historico não existe!")
                }
            }
        )
}
function processo(req, res) {

var id = req.params.id;

    historicoModel.recuperarProcesso(id)
        .then(
            function (resultado) {
                console.log(`\n Resultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string
                if (resultado.length >= 1) {
                    console.log(resultado);
                    res.json(resultado);
                } else {
                    res.status(403).send("historico não existe!")
                }
            }
        )
}

function removerProcesso(req, res) {

    var nome = req.params.nome;
    var id = req.params.id
        
        historicoModel.removerProcesso(nome,id)
            .then(
                function (resultado) {
                    console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string
                    res.json(resultado);
                }
            )
    }

function adicionarProcesso(req, res) {
    var nomeProcesso = req.body.nomeProcessoServer;
    var idEmpresa = req.body.fkEmpresaServer
    
        historicoModel.adicionarProcesso(nomeProcesso, idEmpresa)
        .then(
            function (resultado) {
            res.json(resultado)
            }
        ).catch(
            function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar a criação do Processo! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
            }
        );
    }

    module.exports = {
        historico,
        funcionario,
        remover,
        cargo,
        user,
        ocorrencia,
        processo,
        adicionarProcesso,
        removerProcesso
    }