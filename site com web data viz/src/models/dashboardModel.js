var database = require("../database/config")

function buscarUltimasMedidasCPU(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT dadoCapturado, DATE_FORMAT(dtHora, '%d/%m/%Y às %HH') as dtHora FROM Monitoramento join dispositivo on fkDispositivo = idDispositivo where fkComponente = 1 and fkEmpresa = ${id} order by idDado desc limit 7;
    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasMedidasRAM(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT dadoCapturado, DATE_FORMAT(dtHora, '%d/%m/%Y às %HH') as dtHora FROM Monitoramento join dispositivo on fkDispositivo = idDispositivo where fkComponente = 2 and fkEmpresa = ${id} order by idDado desc limit 7;
    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasMedidasDISCO(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT dadoCapturado, DATE_FORMAT(dtHora, '%d/%m/%Y às %HH%mm%ss') as dtHora FROM Monitoramento join dispositivo on fkDispositivo = idDispositivo where fkComponente = 3 and fkEmpresa = ${id} order by idDado desc limit 7;
    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarTempoRealDisco(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT dadoCapturado, DATE_FORMAT(dtHora, '%d/%m/%Y às %HH%mm%ss') as dtHora FROM Monitoramento join dispositivo on fkDispositivo = idDispositivo where fkComponente = 3 and fkEmpresa = ${id} order by idDado desc limit 1;
    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarTempoRealRam(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT dadoCapturado, DATE_FORMAT(dtHora, '%d/%m/%Y às %HH%mm%ss') as dtHora FROM Monitoramento join dispositivo on fkDispositivo = idDispositivo where fkComponente = 2 and fkEmpresa = ${id} order by idDado desc limit 1;
    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarTempoRealCpu(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT dadoCapturado, DATE_FORMAT(dtHora, '%d/%m/%Y às %HH%mm%ss') as dtHora FROM Monitoramento join dispositivo on fkDispositivo = idDispositivo where fkComponente = 1 and fkEmpresa = ${id} order by idDado desc limit 1;
    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasRAM,
    buscarUltimasMedidasDISCO,
    buscarTempoRealDisco,
    buscarTempoRealRam,
    buscarTempoRealCpu
};