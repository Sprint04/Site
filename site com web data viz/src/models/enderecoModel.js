var database = require("../database/config")

function autenticarEndereco(cep){
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credencias de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cep)
    var instrucao = `
    SELECT * FROM endereco WHERE cep = "${cep}";
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarEndereco(cep, estado, cidade, bairro, rua){
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credencias de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cep, estado, cidade, bairro, rua)    
    var instrucao = `
    insert into endereco values
	(null, "${cep}", "${rua}", "${bairro}", "${cidade}", "${estado}");
    `    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarComplemento(numero, cadastrar, fkEndereco){
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credencias de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cep, estado, cidade, bairro, rua)       
}

module.exports = {
    autenticarEndereco,
    cadastrarEndereco,
    cadastrarComplemento
}