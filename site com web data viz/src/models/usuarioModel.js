var database = require("../database/config")

function recuperarUsuario(cpf) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cpf)
    var instrucao = `
        SELECT * FROM usuario WHERE cpf = '${cpf}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarUsuario(nome, sobrenome, cpf, email, senha, fkEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, cpf, email, senha, fkEmpresa);
    var instrucao = `
    insert into usuario values
    (null, "${nome}", "${sobrenome}", "${cpf}", "${email}", "${senha}", ${fkEmpresa}, 1, 1);
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// nas instruções havia o idempresa, mas como não dava para comentar, apaguei 
module.exports = {
    recuperarUsuario,
    cadastrarUsuario
};