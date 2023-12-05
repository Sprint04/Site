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

function buscarUltimasMedidasNathan(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT TOP 12 count(idOcorrencias) as ocorrencia, CAST(dtHora as DATE) as data from ocorrencia 
        join dispositivo on fkDispositivo = idDispositivo 
            where fkEmpresa = ${id} group by CAST(dtHora as DATE) order by CAST(dtHora as DATE) desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscar_dados_rede(limite_linhas, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function buscar_dados_rede(): ")
    var instrucao = `
    SELECT top ${limite_linhas}
    MAX(CASE WHEN tc.nome = 'Rede(enviada)' THEN m.dadoCapturado ELSE NULL END) AS dadoCapturado2,
    MAX(CASE WHEN tc.nome = 'Rede(recebida)' THEN m.dadoCapturado ELSE NULL END) AS dadoCapturado,
    FORMAT(DATEADD(minute, DATEDIFF(minute, 0, m.dtHora), 0), 'dd/MM/yyyy HH:mm:ss') AS dtHoraAgrupada,
    MAX(m.dtHora) AS dtHora
FROM monitoramento m
INNER JOIN tipoComponente tc ON m.fkComponente = tc.idTipoComponente
WHERE tc.nome IN ('Rede(enviada)', 'Rede(recebida)') and m.fkDispositivo = ${id}
GROUP BY DATEADD(minute, DATEDIFF(minute, 0, m.dtHora), 0)
ORDER BY dtHoraAgrupada DESC;
    `;
    console.log("Executando a ins   trucao SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscar_dados_cpu(limite_linhas, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function buscar_dados_cpu(): ")
    var instrucao = `
    select top ${limite_linhas} monitoramento.idDado, monitoramento.dtHora, monitoramento.dadoCapturado, tipoComponente.nome FROM monitoramento
	JOIN Componentes on Componentes.idComponente = monitoramento.fkComponente
		JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente where nome = 'CPU' and monitoramento.fkDispositivo = ${id} ORDER BY idDado DESC;
    `
    console.log("Executando a ins   trucao SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscar_dados_ram(limite_linhas, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function buscar_dados_cpu(): ")
    var instrucao = `
    select top ${limite_linhas} monitoramento.idDado, monitoramento.dtHora, monitoramento.dadoCapturado, tipoComponente.nome FROM monitoramento
	JOIN Componentes on Componentes.idComponente = monitoramento.fkComponente
		JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente where nome = 'Memória' and monitoramento.fkDispositivo = ${id} ORDER BY idDado DESC;
    `
    console.log("Executando a ins   trucao SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscar_dados_disco(limite_linhas, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function buscar_dados_disco(): ")
    var instrucao = `
    select top ${limite_linhas} monitoramento.idDado, monitoramento.dtHora, monitoramento.dadoCapturado, tipoComponente.nome FROM monitoramento
	JOIN Componentes on Componentes.idComponente = monitoramento.fkComponente
		JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente where nome = 'Disco' and monitoramento.fkDispositivo = ${id} ORDER BY idDado DESC;
    `
    console.log("Executando a ins   trucao SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function tempo_real_rede(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function tempo_real_rede(): ")
    var instrucao = `
    SELECT top 1
    MAX(CASE WHEN tc.nome = 'Rede(enviada)' THEN m.dadoCapturado ELSE NULL END) AS dadoCapturado2,
    MAX(CASE WHEN tc.nome = 'Rede(recebida)' THEN m.dadoCapturado ELSE NULL END) AS dadoCapturado,
    FORMAT(DATEADD(minute, DATEDIFF(minute, 0, m.dtHora), 0), 'dd/MM/yyyy HH:mm:ss') AS dtHoraAgrupada,
    MAX(m.dtHora) AS dtHora
FROM monitoramento m
INNER JOIN tipoComponente tc ON m.fkComponente = tc.idTipoComponente
WHERE tc.nome IN ('Rede(enviada)', 'Rede(recebida)') and m.fkDispositivo = ${id}
GROUP BY DATEADD(minute, DATEDIFF(minute, 0, m.dtHora), 0)
ORDER BY dtHoraAgrupada DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}


function tempo_real_ram(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function tempo_real_rede(): ")
    var instrucao = `
    select top 1 monitoramento.idDado, monitoramento.dtHora, monitoramento.dadoCapturado, tipoComponente.nome FROM monitoramento
	        JOIN Componentes on Componentes.idComponente = monitoramento.fkComponente
		        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente where nome = 'Memória' and monitoramento.fkDispositivo = ${id} ORDER BY idDado DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function tempo_real_cpu(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function tempo_real_cpu(): ")
    var instrucao = `
    select top 1 monitoramento.idDado, monitoramento.dtHora, monitoramento.dadoCapturado, tipoComponente.nome FROM monitoramento
	        JOIN Componentes on Componentes.idComponente = monitoramento.fkComponente
		        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente where nome = 'CPU' and monitoramento.fkDispositivo = ${id} ORDER BY idDado DESC ;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function tempo_real_disco(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function tempo_real_disco(): ")
    var instrucao = `
    select top 1 monitoramento.idDado, monitoramento.dtHora, monitoramento.dadoCapturado, tipoComponente.nome FROM monitoramento
	        JOIN Componentes on Componentes.idComponente = monitoramento.fkComponente
		        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente where nome = 'Disco' and monitoramento.fkDispositivo = ${id} ORDER BY idDado DESC ;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function recuperarCpu(id) {
    console.log("Recuperando CPU...");

    var instrucao = `
        SELECT top 1 monitoramento.idDado, monitoramento.dadoCapturado, tipoComponente.nome
        FROM monitoramento
        JOIN Componentes ON Componentes.idComponente = monitoramento.fkComponente
        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente
        WHERE nome = 'CPU' and monitoramento.fkDispositivo = ${id}
        ORDER BY idDado DESC
        
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function recuperarRam(id) {
    console.log("Recuperando RAM...");

    var instrucao = `
        SELECT top 1 monitoramento.idDado, monitoramento.dadoCapturado, tipoComponente.nome
        FROM monitoramento
        JOIN Componentes ON Componentes.idComponente = monitoramento.fkComponente
        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente
        WHERE nome = 'Memória' and monitoramento.fkDispositivo = ${id}
        ORDER BY idDado DESC
        
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function recuperarDisco(id) {
    console.log("Recuperando Disco...");

    var instrucao = `
        SELECT top 1 monitoramento.idDado, monitoramento.dadoCapturado, tipoComponente.nome
        FROM monitoramento
        JOIN Componentes ON Componentes.idComponente = monitoramento.fkComponente
        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente
        WHERE nome = 'Disco' and monitoramento.fkDispositivo = ${id}
        ORDER BY idDado DESC
        
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function recuperarRede(id) {
    console.log("Recuperando Rede...");

    var instrucao = `
        SELECT top 1 monitoramento.idDado, monitoramento.dadoCapturado, tipoComponente.nome
        FROM monitoramento
        JOIN Componentes ON Componentes.idComponente = monitoramento.fkComponente
        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente
        WHERE nome = 'Rede(recebida)' and monitoramento.fkDispositivo = ${id}
        ORDER BY idDado DESC
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function buscarDispositivo(idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function buscarDispositivo(): ")

    var instrucao = `
    select idDispositivo, alias, IP, nome FROM dispositivo JOIN empresa on fkEmpresa = idEmpresa where idEmpresa = ${idEmpresa} order by alias asc;
`;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}
function tempo_real_cesar(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function tempo_real_rede(): ")
    var instrucao = `
    SELECT top 1
    m_cpu.dadoCapturado AS dadoCpu,
    m_memoria.dadoCapturado AS dadoMemoria,
    m_cpu.dtHora AS dtHora
FROM
    (SELECT * FROM monitoramento WHERE fkComponente = 1) AS m_cpu
JOIN
    (SELECT * FROM monitoramento WHERE fkComponente = 2) AS m_memoria
ON
    ABS(DATEDIFF(SECOND, m_cpu.dtHora, m_memoria.dtHora)) <= 5
WHERE m_cpu.fkDispositivo = ${id};
;
   `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}
function buscar_dados_cesar(limite_linhas, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function buscar_dados_rede(): ")
    var instrucao = `
    SELECT top ${limite_linhas}
    m_cpu.dadoCapturado AS dadoCpu,
    m_memoria.dadoCapturado AS dadoMemoria,
    m_cpu.dtHora AS dtHora
FROM
    (SELECT * FROM monitoramento WHERE fkComponente = 1) AS m_cpu
JOIN
    (SELECT * FROM monitoramento WHERE fkComponente = 2) AS m_memoria
ON
    ABS(DATEDIFF(SECOND, m_cpu.dtHora, m_memoria.dtHora)) <= 5
WHERE m_cpu.fkDispositivo = ${id};
;
    `;
    console.log("Executando a ins   trucao SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscar_dados_kpi(dataFormatada, id) {


    console.log(dataFormatada)
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function kpic cesar aqu to maluco i aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa(): ")
    var instrucao = `
    SELECT
    MAX(CASE WHEN fkComponente = 1 THEN dadoCapturado END) AS maior_dado_cpu,
    MIN(CASE WHEN fkComponente = 1 THEN dadoCapturado END) AS menor_dado_cpu,
    MAX(CASE WHEN fkComponente = 2 THEN dadoCapturado END) AS maior_dado_ram,
    MIN(CASE WHEN fkComponente = 2 THEN dadoCapturado END) AS menor_dado_ram,
    ROUND(AVG(CASE WHEN fkComponente = 1 THEN dadoCapturado END), 2) AS media_dado_cpu,
    ROUND(STDEV(CASE WHEN fkComponente = 1 THEN dadoCapturado END), 2) AS desvio_padrao_cpu,
    ROUND(AVG(CASE WHEN fkComponente = 2 THEN dadoCapturado END), 2) AS media_dado_ram,
    ROUND(STDEV(CASE WHEN fkComponente = 2 THEN dadoCapturado END), 2) AS desvio_padrao_ram
FROM Monitoramento
    WHERE fkDispositivo = ${id}
    AND dtHora BETWEEN '${dataFormatada} 00:01:01' AND '${dataFormatada} 23:59:59'
;
    `;
    console.log("Executando a ins   trucao SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscar_dados_GPU(limite_linhas, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function buscar_dados_cpu(): ")
    var instrucao = `
    select top ${limite_linhas} monitoramento.idDado, monitoramento.dtHora, monitoramento.dadoCapturado, tipoComponente.nome FROM monitoramento
	JOIN Componentes on Componentes.idComponente = monitoramento.fkComponente
		JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente where nome = 'GPU' and monitoramento.fkDispositivo = ${id} ORDER BY idDado DESC;
    `
    console.log("Executando a ins   trucao SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function tempo_real_GPU(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n \t \t >> Se aqui der erro de 'Error: connect ECONNREFUSED', \n \t \t >> verifique suas credenciais de acesso ao banco \n \t \t >> e se o servidor de seu BD está rodando corretamente. \n \n function tempo_real_cpu(): ")
    var instrucao = `
    select top 1 monitoramento.idDado, monitoramento.dtHora, monitoramento.dadoCapturado, tipoComponente.nome FROM monitoramento
	        JOIN Componentes on Componentes.idComponente = monitoramento.fkComponente
		        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente where nome = 'GPU' and monitoramento.fkDispositivo = ${id} ORDER BY idDado DESC ;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function recuperarGPU(id) {
    console.log("Recuperando GPU...");

    var instrucao = `
        SELECT top 1 monitoramento.idDado, monitoramento.dadoCapturado, tipoComponente.nome
        FROM monitoramento
        JOIN Componentes ON Componentes.idComponente = monitoramento.fkComponente
        JOIN tipoComponente ON tipoComponente.idTipoComponente = Componentes.fkTipoComponente
        WHERE nome = 'GPU' and monitoramento.fkDispositivo = ${id}
        ORDER BY idDado DESC
        
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidasCPU,
    buscarUltimasMedidasRAM,
    buscarUltimasMedidasDISCO,
    buscarUltimasMedidasNathan,
    buscarTempoRealDisco,
    buscarTempoRealRam,
    buscarTempoRealCpu,
    buscar_dados_rede,
    buscar_dados_cpu,
    tempo_real_rede,
    buscar_dados_ram,
    tempo_real_disco,
    buscar_dados_disco,
    tempo_real_ram,
    tempo_real_cpu,
    recuperarCpu,
    recuperarRam,
    recuperarDisco,
    recuperarRede,
    buscarDispositivo,
    tempo_real_cesar,
    buscar_dados_cesar,
    buscar_dados_kpi,
    buscar_dados_GPU,
    tempo_real_GPU,
    recuperarGPU
};