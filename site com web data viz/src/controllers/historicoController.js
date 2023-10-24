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

    module.exports = {
        historico
    }