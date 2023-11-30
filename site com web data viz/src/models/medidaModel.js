var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT dadoCapturado as CPU, DATE_FORMAT(dtHora, '%d/%m/%Y às %HH') as dtHora FROM Monitoramento where fkComponente = 1 limit 7`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT dadoCapturado as CPU, DATE_FORMAT(dtHora, '%d/%m/%Y às %HH') as dtHora FROM Monitoramento where fkComponente = 1 limit 7`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT dadoCapturado as RAM, DATE_FORMAT(dtHora, '%d/%m/%Y às %HH') as dtHora FROM Monitoramento where fkComponente = 2 limit 1`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT dadoCapturado as RAM, DATE_FORMAT(dtHora, '%d/%m/%Y às %HH') as dtHora FROM Monitoramento where fkComponente = 2 limit 1`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
