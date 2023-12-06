var database = require("../database/config")

function recuperarHistorico(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recuperarHistorico()", id);
    var instrucao = `
    SELECT idAcesso, 
       CONCAT('O usuario ', u.nome, ' ', descricao, ' no dispostivo ', ISNULL(d.ip, 'Site Institucional Online'), ' as ' ,FORMAT(dtHora,'HH:mm'),' do dia ', FORMAT(dtHora,'dd/MM/yyyy')) as texto 
        FROM acesso 
            JOIN logs ON fklog = idLog 
                JOIN Usuario as u ON fkUsuario = idUsuario 
                    JOIN Empresa ON fkEmpresa = idEmpresa
                        LEFT JOIN dispositivo as d ON idDispositivo = fkDispositivo
                            WHERE idEmpresa = (SELECT fkEmpresa FROM usuario WHERE idUsuario = ${id}) 
                                ORDER BY idAcesso DESC;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function recuperarCargo(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recuperarHistorico()", id);
    var instrucao = `
    select idCargo as id, nome from cargo where fkEmpresa = (select fkEmpresa from usuario where idUsuario = ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function recuperarFuncionario(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recuperarHistorico()", id);
    var instrucao = `
    select idUsuario, concat(u.nome, ' ', sobrenome) as nome, c.nome as cargo, (select count(idUsuario) from usuario where fkEmpresa = (select fkEmpresa from usuario where idUsuario = 1)) as qtdFuncionario from usuario as u 
        join cargo as c on fkCargo = idCargo where u.fkEmpresa = (select fkEmpresa from usuario where idUsuario = ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function removerFuncionario(id,id2) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recuperarHistorico()", id);
    var instrucao = `
        delete from usuario where idUsuario = ${id}
    `;
    var instrucao2 = `insert into acesso(fkUsuario, fkDispositivo, fkLog) values(${id2}, null, ${4})`
    console.log("Executando a instrução SQL: \n" + instrucao);
    database.executar(instrucao2)
    return database.executar(instrucao);
}
function recuperarUser(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recuperarHistorico()", id);
    var instrucao = `
    select u.idUsuario, u.nome, u.sobrenome, u.cpf, u.email_Corporativo as email, c.nome as cargo, e.nome as empresa, chaveAtivacao as token from usuario as u
	join cargo as c on fkCargo = idCargo
		join empresa as e on u.fkEmpresa = idEmpresa
			join tokens as t on fkToken = idToken
				where idUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function recuperarProcesso(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recuperarHistorico()", id);
    var instrucao = `
        select * from processosBloqueados where fkEmpresa = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function recuperarOcorrencia(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recuperarHistorico()", id);
    var instrucao = `
        select top 100 idOcorrencias, fkProcesso, fkDispositivo, cpu, FORMAT(dtHora, 'dd/MM/yyyy  HH:mm:ss') AS dtHoraFormat, processosBloqueados.nome as nomeProcesso, alias from ocorrencias join dispositivo on fkDispositivo = idDispositivo join processosBloqueados on fkProcesso = idProcesso where dispositivo.fkEmpresa = ${id} order by idOcorrencias desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function adicionarProcesso(processo, idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
    var instrucao = `
    insert into processosBloqueados(nome, fkEmpresa) values
        ('${processo}', ${idEmpresa})
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function removerProcesso(processo, idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recuperarHistorico()", idEmpresa);
    var instrucao = `
    delete from processosBloqueados where idProcesso = (select idProcesso from processosBloqueados where nome = '${processo}' and fkEmpresa = ${idEmpresa}) and fkEmpresa = ${idEmpresa}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    recuperarHistorico,
    recuperarFuncionario,
    removerFuncionario,
    recuperarCargo,
    recuperarUser,
    recuperarOcorrencia,
    recuperarProcesso,
    adicionarProcesso,
    removerProcesso
}