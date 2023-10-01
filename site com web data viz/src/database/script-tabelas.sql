CREATE DATABASE Trackware;
USE Trackware;

create table funcao(
	idFuncao int primary key auto_increment,
    titulo varchar(45),
    descricao varchar(200)
    );
    
insert into funcao value
	(null, 'Teste', 'Fazer testes');

create table departamento(
	idDepartamento INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(45),
    fkFuncao int,
	foreign key (fkFuncao) references funcao(idFuncao)
);

insert into departamento value
	(null, 'QA', 1);
    
create table projeto(
	idProjeto int primary key auto_increment,
    nome varchar(45),
    descricao varchar(200)
    );
    
insert into projeto value
	(null, 'Monitoramento de Hardware', 'Desenvolver uma api para monitorar hardwares de computadores');
    
create table situacoes(
	idSituacoes int primary key auto_increment,
    nome varchar(45),
    descricao varchar(200)
    );
    
insert into situacoes values
	(null, 'Ativo', 'Funcionando'),
	(null, 'Inativo', 'Parado mas não deletado'),
	(null, 'Cancelado', 'Não irá mais continuar'),
	(null, 'Espera', 'Esperando por algo'),
	(null, 'Aprovação', 'Esperando por aprovação de alguem'),
	(null, 'Desenvolvimento', 'Sendo desenvolvido'),
	(null, 'Finalizado', 'Projeto concluido');

create table grupo (
	idGrupo INT PRIMARY KEY AUTO_INCREMENT,
    nome varchar(45),
    fkDepartamento INT,
    FOREIGN KEY (fkDepartamento) REFERENCES departamento (idDepartamento)
);
insert into grupo value
(null, 'SIS', 1);

create table atribuicao(
	idAtribuicao int auto_increment,
    fkProjeto int,
    foreign key (fkProjeto) references projeto(idProjeto),
    fkGrupo int,
    foreign key (fkGrupo) references grupo(idGrupo),
    fkSituacoes int,
    foreign key (fkSituacoes) references situacoes(idSituacoes),
    primary key(idAtribuicao,fkProjeto,fkGrupo),
    ultimaAtualizacao datetime default current_timestamp
    );
    
insert into atribuicao(fkProjeto,fkGrupo,fkSituacoes) value
	(1, 1, 6);
    

create table endereco(
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    CEP CHAR (8),
    rua VARCHAR (100),
    bairro VARCHAR (100),
    cidade VARCHAR (100),
    estado CHAR (2)
);

insert into endereco value
	(null, "03111100", 'Catabimbas da Criatividade', 'Lá longe', 'FIM do mundo', 'FM');

create table complemento(
	idComplemento INT AUTO_INCREMENT,
    fkEndereco INT,
    numero varchar(10),
    complemento VARCHAR (45),
    FOREIGN KEY (fkEndereco) REFERENCES endereco (idEndereco),
    primary key(idComplemento, fkEndereco)
);

insert into complemento value
	(null, 1, 2435, 'Predio bem grande');

create table plano(
	idPlano int primary key auto_increment,
	nome varchar(45),
    limite int
    );
    
insert into plano values
	(null, 'Gratis', 5),
	(null, 'Purple', 50),
	(null, 'Black', 9999),
	(null, 'Teste', 2);
    
create table hardware(
	idHardware int primary key auto_increment,
	nome varchar(100),
	descricao varchar(200)
);

insert into hardware values
	(null, 'CPU', 'Um componente do escopo'),
	(null, 'Memória', 'Um componente do escopo'),
	(null, 'Disco', 'Um componente do escopo'),
	(null, 'USB', 'Um componente do escopo'),
	(null, 'Janelas Abertas', 'Um componente do escopo'),
	(null, 'Rede', 'Um componente do escopo');

create table Monitorar (
    idMonitorar INT AUTO_INCREMENT,
    fkPlano INT,
    fkHardware INT,
    permissao BOOLEAN,
    FOREIGN KEY (fkPlano) REFERENCES plano(idPlano),
    FOREIGN KEY (fkHardware) REFERENCES hardware(idHardware),
    primary key(idMonitorar, fkPlano, fkHardware)
);

insert into Monitorar values
	(null, 1, 1, true),
	(null, 1, 2, true),
	(null, 1, 3, true),
	(null, 1, 4, false),
	(null, 1, 5, false),
	(null, 1, 6, false),
	(null, 2, 1, true),
	(null, 2, 2, true),
	(null, 2, 3, true),
	(null, 2, 4, true),
	(null, 2, 5, false),
	(null, 2, 6, false),
	(null, 3, 1, true),
	(null, 3, 2, true),
	(null, 3, 3, true),
	(null, 3, 4, true),
	(null, 3, 5, true),
	(null, 3, 6, true),
    (null, 4, 1, true),
	(null, 4, 2, true),
	(null, 4, 3, true),
	(null, 4, 4, true),
	(null, 4, 5, true),
	(null, 4, 6, true);
    
create table tokens(
	idToken int primary key auto_increment,
	chaveAtivacao char(15),
	fkSituacao int,
	foreign key (fkSituacao) references situacoes(idSituacoes)
	);
    
insert into tokens value
	(null, '123451234512345', 1);
    
create table tipoCartao(
	idTipoCartao int primary key auto_increment,
    tipo varchar(45)
    );
    
insert into tipoCartao values
	(null, 'Debito'),
	(null, 'Credito')
    ;
    
create table bandeiraCartao(
	idBandeira int primary key auto_increment,
    bandeira varchar(45)
    );
    
insert into bandeiraCartao values
	(null, 'MasterCard'),
	(null, 'Visa'),
	(null, 'Elo')
    ;
    
create table cartao(
	idCartao int primary key auto_increment,
	nomeTitular varchar(45),
    numero char(16),
    dtExpiracao date,
    numSeguranca varchar(4),
    fkTipoCartao int,
    foreign key (fkTipoCartao) references tipoCartao(idTipoCartao),
    fkBandeiraCartao int,
    foreign key (fkBandeiraCartao) references bandeiraCartao(idBandeira)
);

insert into cartao value
	(null, 'Jose Maria João da Rosa', '1234567899876543', '2025-08-08', '123', 2, 1);

create table empresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50) ,
    CNPJ CHAR (15),
    fkEnderecoComplemento INT,
    FOREIGN KEY (fkEnderecoComplemento) REFERENCES complemento (idComplemento),
    fkPlano int,
    foreign key (fkPlano) references plano(idPlano),
    fkToken int,
    foreign key (fkToken) references Tokens(idToken),
    fontePagamento int,
    foreign key (fontePagamento) references cartao(idCartao)
);

insert into empresa value
	(null, 'Encomendas do Zé', '123456543279813', 1, 4, 1, 1);

create table cargo(
	idCargo int primary key auto_increment,
    nome varchar(45),
    funcao varchar(200),
    fkEmpresa int,
    foreign key (fkEmpresa) references empresa(idEmpresa)
    );
    
insert into cargo value
	(null, 'Gerente de QA', 'Gerenciar tudo sobre o projeto', 1); 
    
create table permissao(
	idPermissao int primary key auto_increment,
    nome varchar(45),
    descricao varchar(200)
    );
    
insert into permissao value
	(null, 'Criar', 'Oque ela faz'),
	(null, 'Inserir', 'Oque ela faz'),
	(null, 'Deletar', 'Oque ela faz'),
	(null, 'Visualizar', 'Oque ela faz');
    
create table permissionamento(
	idPermissionamento int auto_increment,
    fkCargo int,
    foreign key (fkCargo) references cargo(idCargo),
    fkPermissao int,
    foreign key (fkPermissao) references permissao(idPermissao),
    Permitido Boolean,
    primary key(idPermissionamento, fkCargo, fkPermissao)
    );
    
insert into permissionamento value
	(null, 1, 1, true),
	(null, 1, 2, true),
	(null, 1, 3, true),
	(null, 1, 4, true);
    
CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (30),
    sobrenome VARCHAR (50),
    CPF CHAR (11),
    email_Corporativo VARCHAR (80),
    senha VARCHAR (45),
    fkEmpresa INT,
    fkGrupo INT,
    fkCargo INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
    FOREIGN KEY (fkGrupo) REFERENCES grupo (idGrupo),
    FOREIGN KEY (fkCargo) REFERENCES cargo(idCargo)
);

insert into usuario value
	(null, 'Nathan', 'Oliveira', '12345678123', 'nathan@sptech.com', '12345678', 1,1,1),
	(null, 'Gustavo', 'Albino', '12345678123', 'gustavo@sptech.com', '12345678', 1,1,1),
	(null, 'Cesar', 'Martins', '12345678123', 'cesar@sptech.com', '12345678', 1,1,1),
	(null, 'Everton', 'Araujo', '12345678123', 'everton@sptech.com', '12345678', 1,1,1),
	(null, 'Guiovanna', 'Avila', '12345678123', 'giovanna@sptech.com', '12345678', 1,1,1);

create table tipoTelefone(
	idTipo int primary key auto_increment,
    nome varchar(45),
    digitos int
    );
    
insert into tipoTelefone value
	(null, 'Celular', 9),
	(null, 'Fixo', 8),
	(null, 'Ramal', 3);

CREATE TABLE telefone(
	idTelefone INT PRIMARY KEY,
	fkUsuario INT,
	FOREIGN KEY (fkusuario) REFERENCES usuario (idUsuario),
    fkTipo int,
    foreign key (fkTipo) references tipoTelefone(idTipo),
    numero VARCHAR (9)
);

CREATE TABLE dispositivo (
	idDispositivo INT PRIMARY KEY AUTO_INCREMENT,
	sistema_Operacional VARCHAR (45),
    IP VARCHAR (50),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

create table logs(
idLog int primary key auto_increment,
descricao varchar(200)
);

insert into logs values
	(null, 'Iniciou o programa'),
	(null, 'Desativou o programa'),
	(null, 'etc Logs');

CREATE TABLE acesso (
	idAcesso INT primary key auto_increment,
    fkUsuario INT,
    fkDispositivo INT,
	dtHora DATETIME default current_timestamp,
    fkLog int,
    FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
    FOREIGN KEY (fkDispositivo) REFERENCES dispositivo (idDispositivo),
    foreign key (fkLog) references logs(idLog)
);

create table unidadeMedida(
	idUnidadeMedida int primary key auto_increment,
    nome varchar(45),
    descricao varchar(200)
    );

insert into unidadeMedida values
	(null, 'Porcentagem', 'Usado como medida de volume indica que o total foi dividido por 100 e aquilo e tantas partes daquela divisão'),
	(null, 'Unidade', 'Usado como medida unitaria'),
	(null, 'hertz', 'Usado como medida na informatica de velocidade mas é uma medida de frequencia'),
	(null, 'Gigahertz', 'Usado como medida na informatica de velocidade mas é uma medida de frequencia, é equivalente a 10^9 hertz'),
	(null, 'bytes', 'Usado como medida de transferencia de dados'),
	(null, 'Gigabytes', 'Usado como medida de transferencia de dados, equivalente a 10^9 bytes');
    
create table simbolo(
	idSimbolo int primary key auto_increment,
    simbolo varchar(10),
    fkUnidadeMedida int,
    foreign key (fkUnidadeMedida) references unidadeMedida(idUnidadeMedida)
    );
    
insert into simbolo values
	(null, '%', 1),
	(null, '¹', 2),
	(null, 'Hz', 3),
	(null, 'GHz', 4),
	(null, 'b', 6),
	(null, 'Gb', 5);
    
create table complementoUnidade(
	idComplementoUnidade int primary key auto_increment,
    complemento varchar(200)
    );
    
insert into complementoUnidade values
	(null, 'Usado'),
	(null, 'Livre'),
	(null, 'Transferido'),
	(null, 'abertas'),
	(null, 'abertos'),
	(null, 'de Frequência'),
	(null, 'conectados');
    
create table sentencas(
	idSentencas int auto_increment,
    fkUnidadeMedida int,
    foreign key (fkUnidadeMedida) references unidadeMedida(idUnidadeMedida),
    fkComplementoUnidade int,
    foreign key (fkComplementoUnidade) references complementoUnidade(idComplementoUnidade),
    primary key(idSentencas,fkUnidadeMedida,fkComplementoUnidade)
    );
    
insert into sentencas values
	(null, 1, 1),
	(null, 1, 2),
	(null, 2, 4),
	(null, 2, 5),
	(null, 5, 1),
	(null, 6, 1),
	(null, 5, 3),
	(null, 6, 3),
	(null, 3, 6),
	(null, 4, 6),
	(null, 2, 7);
    
create table analytics(
	idAnalytics int primary key auto_increment,
    descricao varchar(200),
    fkSentencas int,
    foreign key (fkSentencas) references sentencas(idSentencas)
    );
    
insert into analytics values
	(null, 'Utilizada para ver todos que falam quanto esta sendo usado disso', 1),
	(null, 'Utilizada para ver janelas abertas', 3),
	(null, 'Utilizada para ver dados transferidos', 7),
	(null, 'Utilizada para ver quantidade conectada', 11);
    
create table limites(
	idLimites int primary key auto_increment,
    numeros float
    );

insert into limites values
	(null, 80),
	(null, 95),
	(null, 80000000),
	(null, 12),
	(null, 18),
	(null, 2),
	(null, 3);
    
create table tipoLimite(
	idTipoLimite int primary key auto_increment,
    nome varchar(45),
    descricao varchar(200)
    );
    
insert into tipoLimite values
	(null, 'Alerta Vermelho', 'Deu ruim cara, tem que ver urgente isso ai'),
	(null, 'Alerta Amarelo', 'Cara, fica de olho pfv');
    
create table gatilhos(
	idGatilhos int auto_increment,
    fkLimites int,
    foreign key (fkLimites) references limites(idLimites),
    fkTipoLimite int,
    foreign key (fkTipoLimite) references tipoLimite(idTipoLimite),
    fkAnalytics int,
    foreign key (fkAnalytics) references analytics(idAnalytics),
    primary key(idGatilhos, fkLimites, fkTipoLimite)
    );
    
insert into gatilhos values
	(null, 1, 2, 1),
	(null, 2, 1, 1),
	(null, 3, 2, 3),
	(null, 4, 2, 2),
	(null, 5, 1, 2),
	(null, 6, 2, 4),
	(null, 7, 1, 4);

create table tipoComponente(
	idTipoComponente int primary key auto_increment,
	nome varchar(45),
    descricao varchar(200),
    fkAnalytics int,
    foreign key (fkAnalytics) references analytics(idAnalytics)
    );
    
insert into tipoComponente values
	(null,'CPU','Um componente do escopo',1),
	(null,'Memória','Um componente do escopo',1),
	(null,'Disco','Um componente do escopo',1),
	(null,'USB','Um componente do escopo', 4),
	(null,'JanelasAbertas','Um componente do escopo',2),
	(null,'Rede','Um componente do escopo', 3);

CREATE TABLE componentes(
	idComponente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (45),
    descricao VARCHAR (100),
    fkTipoComponente int,
    foreign key (fkTipoComponente) references tipoComponente(idTipoComponente)
);

insert into componentes value
	(null, 'CPU 1','Um componente do escopo', 1),
	(null, 'Memória 1','Um componente do escopo', 2),
	(null, 'Disco 1','Um componente do escopo', 3),
	(null, 'portas USB','Um componente do escopo', 4),
	(null, 'Janelas Gerais 1','Um componente do escopo', 5),
	(null, 'Rede(recebida)','Um componente do escopo', 6),
	(null, 'Rede(enviada)','Um componente do escopo', 6);

CREATE TABLE monitoramento(
	idDado INT PRIMARY KEY AUTO_INCREMENT,
    dadoCapturado FLOAT,
    dtHora DATETIME default current_timestamp,
    fkComponente INT,
    FOREIGN KEY (fkComponente) REFERENCES componentes (idComponente),
    fkDispositivo int,
    foreign key (fkDispositivo) references dispositivo(idDispositivo)
);

CREATE TABLE alerta (
	idAlerta INT PRIMARY KEY AUTO_INCREMENT,
    fkNivel int,
    foreign key (fkNivel) references tipoLimite(idTipoLimite),
    descricao VARCHAR (100),
    fkComponente INT,
    fkDispositivo int,
    fkDados INT,
    FOREIGN KEY (fkDados) REFERENCES monitoramento (idDado),
    foreign key (fkDispositivo) references dispositivo(idDispositivo),
    FOREIGN KEY (fkComponente) REFERENCES componentes (idComponente)
);