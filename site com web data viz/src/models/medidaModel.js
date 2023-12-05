var database = require("../database/config");


function recuperarProcessos() {
    console.log("Recuperando processos...");

    var instrucao = `
        SELECT top 1 monitoramento.idDado, monitoramento.dadoCapturado, tipoComponente.nome
        FROM monitoramento
        JOIN Componentes ON Componentes.idComponente = monitoramento.fkComponente
        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente
        WHERE nome = 'Processos'
        ORDER BY idDado DESC
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function recuperarCpu() {
    console.log("Recuperando CPU...");

    var instrucao = `
        SELECT top 1 monitoramento.idDado, monitoramento.dadoCapturado, tipoComponente.nome
        FROM monitoramento
        JOIN Componentes ON Componentes.idComponente = monitoramento.fkComponente
        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente
        WHERE nome = 'CPU'
        ORDER BY idDado DESC
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function buscarUltimasMedidas_temperatura(limite_linhas) {

    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        select top ${limite_linhas} monitoramento.idDado, monitoramento.dtHora, monitoramento.dadoCapturado, tipoComponente.nome FROM monitoramento
	        JOIN Componentes on Componentes.idComponente = monitoramento.fkComponente
		        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente where nome = 'Temperatura' ORDER BY idDado DESC ;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal_temperatura() {

    instrucaoSql = ''

    // if (process.env.AMBIENTE_PROCESSO == "producao") {
    //     instrucaoSql = `select top 1
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,  
    //                     CONVERT(varchar, momento, 108) as momento_grafico, 
    //                     fk_aquario 
    //                     from medida where fk_aquario = ${idSensor = 1} 
    //                 order by id desc`;

    // } else 
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        select top 1 monitoramento.idDado, monitoramento.dtHora, monitoramento.dadoCapturado, tipoComponente.nome FROM monitoramento
	        JOIN Componentes on Componentes.idComponente = monitoramento.fkComponente
		        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente where nome = 'Temperatura' ORDER BY idDado DESC;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    recuperarProcessos,
    recuperarCpu,
    buscarUltimasMedidas_temperatura,
    buscarMedidasEmTempoReal_temperatura
}