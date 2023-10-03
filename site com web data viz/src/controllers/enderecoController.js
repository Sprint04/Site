var enderecoModel = require("../models/enderecoModel");

function autenticarEndereco(req, res) {
    var cep = req.body.cepServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var rua = req.body.ruaServer;

    if (cep == undefined) {
        res.status(400).send("Seu CEP está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Seu ESTADO está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua CIDADE está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu BAIRRO está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Sua RUA está undefined!");
    } else {
        enderecoModel.autenticarEndereco(cep)
            .then(
                function (resultado) {
                    console.log(`\n Resultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        console.log("CEP Não encontrado, iniciando cadastro")
                        enderecoModel.cadastrarEndereco(cep, estado, cidade, bairro, rua)
                            .then(
                                function (resultado) {
                                    res.json(resultado);
                                    console.log(resultado)

                                    enderecoModel.autenticarEndereco(cep)
                                        .then(
                                            function (resultado) {
                                                console.log(`\n Resultados encontrados: ${resultado.length}`);
                                                console.log(`Resultados: ${JSON.stringify(resultado)}`) //transforma JSON em string

                                                if (resultado.length == 1) {
                                                    console.log(resultado);
                                                    res.json(resultado[0]);
                                                }
                                            }
                                            ).catch(
                                                function (erro) {
                                                    console.log(erro);
                                                    console.log("\nHouve um erro ao consultar endereço! Erro: ", erro.sqlMessage);
                                                    res.status(500).json(erro.sqlMessage);
                                                }
                                            );
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
                    } else {
                        res.status(403).send("Mais de um endereço encontrado!")
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao consultar endereço! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticarEndereco
}