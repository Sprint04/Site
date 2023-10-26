CREATE DATABASE Trackware;
USE Trackware;

create table situacao(
	idSituacao int primary key auto_increment,
    nome varchar(45),
    descricao varchar(200)
    );
    
insert into situacao values
	(null, 'Ativo', 'Funcionando'),
	(null, 'Inativo', 'Parado mas não deletado'),
	(null, 'Cancelado', 'Não irá mais continuar');

CREATE TABLE endereco(
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    CEP CHAR (8),
    rua VARCHAR (100),
    bairro VARCHAR (100),
    cidade VARCHAR (100),
    estado CHAR (2)
);

insert into endereco value
	(null, "03111100", 'Catabimbas da Criatividade', 'Lá longe', 'FIM do mundo', 'FM');

CREATE TABLE complemento(
	idComplemento INT AUTO_INCREMENT,
    fkEndereco INT,
    numero varchar(10),
    complemento VARCHAR (45),
    FOREIGN KEY (fkEndereco) REFERENCES endereco (idEndereco),
    primary key(idComplemento, fkEndereco)
);

insert into complemento value
	(null, 1, 2435, 'Predio bem grande');

CREATE TABLE plano(
	idPlano int primary key auto_increment,
	nome varchar(45),
    limite int
    );
    
insert into plano values
	(null, 'Gratis', 5),
	(null, 'Purple', 50),
	(null, 'Black', 9999),
	(null, 'Teste', 2);
    
create table tokens(
	idToken int primary key auto_increment,
	chaveAtivacao char(15),
	fkSituacao int,
	foreign key (fkSituacao) references situacao(idSituacao)
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
	(null, 'Maestro')
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

CREATE TABLE empresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (50),
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
        fkEmpresa int,
    nome varchar(45),
    funcao varchar(200),
    foreign key (fkEmpresa) references empresa(idEmpresa)
    );
    
insert into cargo value
	(null, 1, 'Gerente de QA', 'Gerenciar tudo sobre o projeto'); 
    
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
    permitido Boolean,
    primary key(idPermissionamento, fkCargo, fkPermissao)
    );
    
insert into permissionamento value
	(null, 1, 1, true),
	(null, 1, 2, true),
	(null, 1, 3, true),
	(null, 1, 4, true);
    
CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR (30),
    sobrenome VARCHAR (100),
    CPF CHAR (11),
    email_Corporativo VARCHAR (80),
    senha VARCHAR (45),
	fkCargo INT,
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa),
    FOREIGN KEY (fkCargo) REFERENCES cargo(idCargo)
);

insert into usuario value
	(null, 'Nathan', 'Oliveira', '12345678123', 'nathan@sptech.com', '12345678', 1,1),
	(null, 'Gustavo', 'Albino', '12345678123', 'gustavo@sptech.com', '12345678', 1,1),
	(null, 'Cesar', 'Martins', '12345678123', 'cesar@sptech.com', '12345678', 1,1),
	(null, 'Everton', 'Araujo', '12345678123', 'everton@sptech.com', '12345678', 1,1),
	(null, 'Guiovanna', 'Avila', '12345678123', 'giovanna@sptech.com', '12345678', 1,1);

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
	idTelefone INT PRIMARY KEY AUTO_INCREMENT,
	fkUsuario INT,
	FOREIGN KEY (fkusuario) REFERENCES usuario (idUsuario),
    fkTipo int,
    foreign key (fkTipo) references tipoTelefone(idTipo),
    numero VARCHAR (11)
);

CREATE TABLE dispositivo (
	idDispositivo INT PRIMARY KEY AUTO_INCREMENT,
	sistema_Operacional VARCHAR (45),
    IP VARCHAR (50),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

insert into dispositivo values
(null, "Windows", "192.168.00.0", 1);

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
	(null, 'Gigabytes', 'Usado como medida de transferencia de dados, equivalente a 10^9 bytes'),
	(null, 'Megabytes', 'Usado como medida de transferencia de dados, equivalente a 10^6 bytes');
    
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
    limite float,
    fkTipoLimite int,
    foreign key (fkTipoLimite) references tipoLimite(idTipoLimite),
    primary key(idGatilhos, fkTipoLimite)
    );
    
insert into gatilhos values
	(null, 80, 1),
	(null, 90, 1),
	(null, 70, 2),
	(null, 60, 2),
	(null, 50, 2),
	(null, 95, 1),
	(null, 75, 1);

create table tipoComponente(
	idTipoComponente int primary key auto_increment,
	nome varchar(45),
    descricao varchar(200),
    fkUnidadeMedida int,
    foreign key (fkunidadeMedida) references unidadeMedida(idUnidadeMedida)
    );
    
insert into tipoComponente values
	(null,'CPU','Um componente do escopo',1),
	(null,'Memória','Um componente do escopo',1),
	(null,'Disco','Um componente do escopo',1),
	(null,'USB','Um componente do escopo', 4),
	(null,'JanelasAbertas','Um componente do escopo',2),
	(null,'Rede','Um componente do escopo', 3);

CREATE TABLE Monitorar (
    idMonitorar INT AUTO_INCREMENT,
    fkPlano INT,
    fkTipoComponente INT,
    permissao BOOLEAN,
    FOREIGN KEY (fkPlano) REFERENCES plano(idPlano),
    FOREIGN KEY (fkTipoComponente) REFERENCES tipoComponente(idTipoComponente),
    primary key(idMonitorar, fkPlano, fkTipoComponente)
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

CREATE TABLE componentes(
	idComponente INT PRIMARY KEY AUTO_INCREMENT,
    fkTipoComponente int,
    foreign key (fkTipoComponente) references tipoComponente(idTipoComponente),
    fkDispositivo int,
    foreign key (fkDispositivo) references dispositivo(idDispositivo),
    capacidade float,
    fkGatilhos int,
    foreign key (fkGatilhos) references gatilhos(idGatilhos)
);

insert into componentes value
	(null, 1, 1, 10.0, 1),
	(null, 2, 1, 10.0, 2),
	(null, 3, 1, 10.0, 3),
	(null, 4, 1, 10.0, 4),
	(null, 5, 1, 10.0, 5),
	(null, 6, 1, 10.0, 6),
	(null, 1, 1, 10.0, 6);

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
	fkDados INT,
    fkComponente INT,
    FOREIGN KEY (fkDados) REFERENCES monitoramento (idDado),
    FOREIGN KEY (fkComponente) REFERENCES componentes (idComponente)
);


use trackware;
select * from monitoramento;
select * from endereco;
select * from complemento;
select * from empresa;
select * from usuario;
select * from telefone;
select * from cartao;

SELECT 
usuario.nomeUsuario as "nomeUsuario",
usuario.email_Corporativo,
usuario.idUsuario,
empresa.idEmpresa,
empresa.nome as "nomeEmpresa" FROM usuario JOIN empresa ON idEmpresa = fkEmpresa WHERE email_Corporativo = 'tom@gmail.com' AND senha = 'Tom4002!';

desc telefone;
delete from endereco where idEndereco = 29;
delete from complemento where idComplemento = 3;
delete from empresa where idEmpresa = 3;
delete from usuario where idUsuario = 6;
delete from cartao where idCartao = 6;
desc telefone;