var database = require("../database/config")

function recuperarHistorico(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function recuperarHistorico()", id);
    var instrucao = `
    select idAcesso, concat('O usuario ', u.nome, ' ', descricao, ' no dispostivo ', d.ip, ' as ' ,DATE_FORMAT(dtHora,'%Hh%im'),' do dia ', DATE_FORMAT(dtHora,'%d/%m/%Y')) as texto from acesso 
	join logs on fklog = idLog join Usuario as u on fkUsuario = idUsuario 
		join Empresa on fkEmpresa = idEmpresa
			join dispositivo as d on idDispositivo = fkDispositivo
				where idEmpresa = (select fkEmpresa from usuario where idUsuario = ${id}) order by idAcesso desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    recuperarHistorico
}