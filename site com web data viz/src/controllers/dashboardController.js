var dashboardModel = require("../models/dashboardModel");

function buscarUltimasMedidasCPU(req, res) {

    var id = req.params.idEmpresa;

    dashboardModel.buscarUltimasMedidasCPU(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasRAM(req, res) {

    var id = req.params.idEmpresa;

    dashboardModel.buscarUltimasMedidasRAM(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasDISCO(req, res) {

    var id = req.params.idEmpresa;

    dashboardModel.buscarUltimasMedidasDISCO(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTempoRealDisco(req, res) {

    var id = req.params.idEmpresa;

    dashboardModel.buscarTempoRealDisco(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarTempoRealRam(req, res) {

    var id = req.params.idEmpresa;

    dashboardModel.buscarTempoRealRam(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarTempoRealCpu(req, res) {

    var id = req.params.idEmpresa;

    dashboardModel.buscarTempoRealCpu(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasMedidasNathan(req, res) {

    var id = req.params.idEmpresa;

    dashboardModel.buscarUltimasMedidasNathan(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscar_dados_rede(req, res){
    const limite_linhas = 5;
    var id = req.params.idDispositivo;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas da rede`);

    dashboardModel.buscar_dados_rede(limite_linhas, id).then(function (resultado) {
        if (resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as últimas medidas da rede.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscar_dados_cpu(req, res){
    const limite_linhas = 5;
    var id = req.params.idDispositivo;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas da cpu`);

    dashboardModel.buscar_dados_cpu(limite_linhas, id).then(function (resultado) {
        if (resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as últimas medidas da cpu.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscar_dados_ram(req, res){
    const limite_linhas = 5;
    var id = req.params.idDispositivo;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas da ram`);

    dashboardModel.buscar_dados_ram(limite_linhas, id).then(function (resultado) {
        if (resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as últimas medidas da ram.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscar_dados_disco(req, res){
    const limite_linhas = 5;
    var id = req.params.idDispositivo;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas do disco`);

    dashboardModel.buscar_dados_disco(limite_linhas, id).then(function (resultado) {
        if (resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as últimas medidas do disco.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function tempo_real_rede(req, res){
    console.log(`Recuperando medidas da rede em tempo real`);
    var id = req.params.idDispositivo;

    dashboardModel.tempo_real_rede(id).then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro)
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function tempo_real_ram(req, res){
    console.log(`Recuperando medidas da ram em tempo real`);
    var id = req.params.idDispositivo;

    dashboardModel.tempo_real_ram(id).then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro)
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function tempo_real_cpu(req, res){
    console.log(`Recuperando medidas da cpu em tempo real`);
    var id = req.params.idDispositivo;

    dashboardModel.tempo_real_cpu(id).then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro)
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function tempo_real_disco(req, res){
    console.log(`Recuperando medidas do disco em tempo real`);
    var id = req.params.idDispositivo;

    dashboardModel.tempo_real_disco(id).then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro)
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function recuperarCpu(req, res){
    var id = req.params.idDispositivo;
    dashboardModel.recuperarCpu(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a recuperação da cpu! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function recuperarRam(req, res){
    var id = req.params.idDispositivo;
    dashboardModel.recuperarRam(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a recuperação da ram! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function recuperarDisco(req, res){
    var id = req.params.idDispositivo;
    dashboardModel.recuperarDisco(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a recuperação do disco! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function recuperarRede(req, res){
    var id = req.params.idDispositivo;
    
    dashboardModel.recuperarRede(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a recuperação da rede! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarDispositivo(req, res){
    var idEmpresa = req.params.idEmpresa;

    dashboardModel.buscarDispositivo(idEmpresa).then(function(resultado){
        console.log(`\n Resultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // Transforma JSON em string
    
        if(resultado.length >= 1){
            console.log(resultado);
            res.json(resultado);
        } else {
            res.status(403).send("Dispositivos não existem!")
        }
    })
}
function tempo_real_cesar(req, res){
    console.log(`Recuperando medidas da rede em tempo real`);

    dashboardModel.tempo_real_cesar().then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro)
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscar_dados_cesar(req, res){
    const limite_linhas = 5;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas da rede`);

    dashboardModel.buscar_dados_cesar(limite_linhas).then(function (resultado) {
        if (resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as últimas medidas da rede.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasRAM,
    buscarUltimasMedidasDISCO,
    buscarUltimasMedidasNathan,
    buscarTempoRealDisco,
    buscarTempoRealRam,
    buscarTempoRealCpu,
    buscar_dados_rede,
    buscar_dados_cpu,
    tempo_real_rede,
    buscar_dados_ram,
    tempo_real_ram,
    buscar_dados_disco,
    tempo_real_disco,
    tempo_real_cpu,
    recuperarCpu,
    recuperarRam,
    recuperarDisco,
    recuperarRede,
    buscarDispositivo,
    tempo_real_cesar,
    buscar_dados_cesar

}