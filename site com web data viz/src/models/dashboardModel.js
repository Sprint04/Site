var database = require("../database/config")

function buscarUltimasMedidasCPU(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT TOP 7
    dadoCapturado,
    FORMAT(dtHora, 'dd/MM/yyyy / HH:mm:ss') AS dtHora
FROM
    Monitoramento
JOIN
    dispositivo ON fkDispositivo = idDispositivo
WHERE
    fkComponente = 1
    AND fkEmpresa = ${id}
ORDER BY
    idDado DESC;

    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasMedidasRAM(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT TOP 7
    dadoCapturado,
    FORMAT(dtHora, 'dd/MM/yyyy / HH:mm:ss') AS dtHora
FROM
    Monitoramento
JOIN
    dispositivo ON fkDispositivo = idDispositivo
WHERE
    fkComponente = 2
    AND fkEmpresa = ${id}
ORDER BY
    idDado DESC;

    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasMedidasDISCO(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT TOP 7
    dadoCapturado,
    FORMAT(dtHora, 'dd/MM/yyyy / HH:mm:ss') AS dtHora
FROM
    Monitoramento
JOIN
    dispositivo ON fkDispositivo = idDispositivo
WHERE
    fkComponente = 3
    AND fkEmpresa = ${id}
ORDER BY
    idDado DESC;

    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarTempoRealDisco(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT TOP 1
    dadoCapturado,
    FORMAT(dtHora, 'dd/MM/yyyy / HH:mm:ss') AS dtHora
FROM
    Monitoramento
JOIN
    dispositivo ON fkDispositivo = idDispositivo
WHERE
    fkComponente = 3
    AND fkEmpresa = ${id}
ORDER BY
    idDado DESC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarTempoRealRam(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT TOP 1
    dadoCapturado,
    FORMAT(dtHora, 'dd/MM/yyyy / HH:mm:ss') AS dtHora
FROM
    Monitoramento
JOIN
    dispositivo ON fkDispositivo = idDispositivo
WHERE
    fkComponente = 2
    AND fkEmpresa = ${id}
ORDER BY
    idDado DESC;
    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarTempoRealCpu(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT TOP 1
    dadoCapturado,
    FORMAT(dtHora, 'dd/MM/yyyy / HH:mm:ss') AS dtHora
FROM
    Monitoramento
JOIN
    dispositivo ON fkDispositivo = idDispositivo
WHERE
    fkComponente = 1
    AND fkEmpresa = ${id}
ORDER BY
    idDado DESC;
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