var database = require("../database/config")

function buscarUltimasMedidasGEO() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT 
	SUBSTRING(endereco, 1, CHARINDEX(',', endereco) - 1) as cidade,
	LTRIM(RTRIM(SUBSTRING(SUBSTRING(endereco, CHARINDEX(',', endereco) + 1, LEN(endereco)), 1, CHARINDEX(',', SUBSTRING(endereco, CHARINDEX(',', endereco) + 1, LEN(endereco))) - 1))) as estado,
	RIGHT(endereco, CHARINDEX(',', REVERSE(endereco)) - 1) as Pais,
	latitude,
	longitude
FROM geolocalizacao
	join dispositivo on fkDispositivo = idDispositivo
WHERE fkEmpresa = 1;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasMedidasQTD() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT endereco, COUNT(fkDispositivo) AS quantidade_de_computadores FROM geolocalizacao GROUP BY endereco;
    ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasMedidasCPU() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT AVG(porcentagemUsoCPU) AS mediaCPU, 
       FORMAT(dataHoraCaptura, 'dd/MM/yyyy HH') AS dataHoraCaptura 
FROM dados_cpu 
GROUP BY FORMAT(dataHoraCaptura, 'dd/MM/yyyy HH') 
ORDER BY dataHoraCaptura;
;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasMedidasRAM() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT AVG(dadoCapturado) AS mediaRAM, 
       FORMAT(dtHora, 'dd/MM/yyyy HH') AS dtHora 
FROM Monitoramento 
WHERE fkComponente = 2 
GROUP BY FORMAT(dtHora, 'dd/MM/yyyy HH') 
ORDER BY dtHora;
;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasMedidasDISCO() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT AVG(dadoCapturado) AS mediaDISCO, 
       FORMAT(dtHora, 'dd/MM/yyyy HH') AS dtHora 
FROM Monitoramento 
WHERE fkComponente = 3 
GROUP BY FORMAT(dtHora, 'dd/MM/yyyy HH') 
ORDER BY dtHora;
;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidasGEO,
    buscarUltimasMedidasQTD,
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasRAM,
    buscarUltimasMedidasDISCO
};