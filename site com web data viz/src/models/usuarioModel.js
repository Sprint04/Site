var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT id, nome, email, fk_empresa as empresaId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, sobrenome, telefoneFixo,
    telefoneCalular, cpf
    // , empresaId
    ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao1 = `
        INSERT INTO Usuario (Nome, Sobrenome, CPF, Email_Corporativo, Senha
            ) VALUES ('${nome}', '${sobrenome}', '${cpf}','${email}','${senha}');
    `;
    var instrucao2 = `
            INSERT INTO Telefone (TelFixo, TelCel
                ) VALUES ('${telefoneFixo}', '${telefoneCalular}';  
    `;
    console.log("Executando a instrução SQL: \n" + instrucao1, instrucao2);
    return database.executar(instrucao1 + instrucao2);
}
// nas instruções havia o idempresa, mas como não dava para comentar, apaguei 
module.exports = {
    autenticar,
    cadastrar
};