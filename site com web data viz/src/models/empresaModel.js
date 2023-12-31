var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from empresa where id = ${id}`;

  return database.executar(query);
}

function recuperarEmpresa(cnpj) {
  console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credencias de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj)
  var instrucao = `
    select * from empresa WHERE cnpj = '${cnpj}'
    `

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function buscarPorCnpj(cnpj) {
  var query = `select * from empresa where cnpj = '${cnpj}'`;

  return database.executar(query);
}

function cadastrarEmpresa(nome, cnpj, fkEnderecoComplemento, fkToken) {
  console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credencias de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nome, cnpj, fkEnderecoComplemento, fkToken)
  var instrucao = `
    insert into empresa (nome, CNPJ, fkEnderecoComplemento, fkPlano, fkToken) values
    ('${nome}', '${cnpj}', ${fkEnderecoComplemento}, 1, ${fkToken});
    `

  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

function criarToken(token) {
  console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretament. \n \n function criarToken(): ", token)

  var instrucao = `
  insert into Tokens (chaveAtivacao, fkSituacao) values
     ('${token}', 1)

  `
  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

function recuperarToken(token){
  console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretament. \n \n function recuperarToken(",token,"): ")
  
  var instrucao = `
  select idToken from tokens where chaveAtivacao = '${token}';
  `

  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}
function buscarCargo(id){
  console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretament. \n \n function recuperarToken(",id,"): ")
  
  var instrucao = `
  select permitido as 'hist', (select permitido from permissionamento join permissao on fkPermissao = idPermissao where nome = 'Adicionar Cargos e Funcionarios' and fkCargo = ${id}) as 'add',
	(select permitido from permissionamento join permissao on fkPermissao = idPermissao where nome = 'Editar Planos' and fkCargo = ${id}) as 'adm'
	from permissionamento join permissao on fkPermissao = idPermissao where nome = 'Acessar Histórico' and fkCargo = ${id}; 
  `

  console.log("Executando a instrução SQL: \n" + instrucao);

  return database.executar(instrucao);
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrarEmpresa,
  recuperarEmpresa,
  criarToken,
  recuperarToken,
  buscarCargo
};
