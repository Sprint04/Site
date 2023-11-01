var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from empresa where id = '${id}'`;

  return database.executar(query);
}

function recuperarEmpresa(cnpj) {
  console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credencias de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj)
  var instrucao = `
    select * from empresa WHERE cnpj = "${cnpj}"
    `

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function buscarPorCnpj(cnpj) {
  var query = `select * from empresa where cnpj = '${cnpj}'`;

  return database.executar(query);
}

function cadastrarEmpresa(nome, cnpj, fkEnderecoComplemento) {
  console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credencias de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nome, cnpj, fkEnderecoComplemento)
  var instrucao = `
    insert into Empresa (idEmpresa, nome, CNPJ, fkEnderecoComplemento, fkPlano, fkToken) values
    (null, "${nome}", "${cnpj}", ${fkEnderecoComplemento}, 1, (select max(idToken) from tokens));
    `
  var token = ""
  var op = ["1","2","3","4","5","6","7","8","9","a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  for (i = 0; token.length < 25; i++){
    letra = Math.floor(Math.random() * 36)
    token += op[letra]
  }
  var instrucao2 = `
  insert into Tokens (chaveAtivacao, fkSituacao) value
     ('${token}', 1)
  `

  console.log("Executando a instrução SQL: \n" + instrucao);
  database.executar(instrucao2);
  return database.executar(instrucao);
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrarEmpresa,
  recuperarEmpresa
};
