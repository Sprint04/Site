CREATE DATABASE Trackware;
USE Trackware;

CREATE TABLE Departamento(
	idDepartamento INT PRIMARY KEY AUTO_INCREMENT,
    Funcao VARCHAR (45)
);

CREATE TABLE Grupo (
	idGrupo INT PRIMARY KEY AUTO_INCREMENT,
    Projeto VARCHAR (45),
    fkDepartamento INT,
    CONSTRAINT fkDepartamentoGrupo FOREIGN KEY (fkDepartamento) REFERENCES Departamento (idDepartamento)
);

CREATE TABLE Telefone(
	idTelefone INT PRIMARY KEY AUTO_INCREMENT,
    TelFixo CHAR (8),
    TelCel CHAR (9)
);

CREATE TABLE Permissao(
	idPermissao INT PRIMARY KEY AUTO_INCREMENT,
    Inserir CHAR (1),
    Alterar CHAR (1),
    Excluir CHAR (1),
    Visualizar VARCHAR (45)
);

CREATE TABLE Endereco(
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    CEP CHAR (8),
    Rua VARCHAR (100),
    Bairro VARCHAR (100),
    Cidade VARCHAR (100),
    Estado CHAR (2)
);

CREATE TABLE Complemento(
	idComplemento INT PRIMARY KEY AUTO_INCREMENT,
    fkEndereco INT,
    Numero INT,
    Complemento VARCHAR (15),
    CONSTRAINT fkEnderecoComplemento FOREIGN KEY (fkEndereco) REFERENCES Endereco (idEndereco)
);

CREATE TABLE Empresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR (50),
    CNPJ CHAR (15),
    Token CHAR (15),
    Plano CHAR (1),
    fkEnderecoComplemento INT,
    CONSTRAINT fkEnderecoComplementoEmpresa FOREIGN KEY (fkEnderecoComplemento) REFERENCES Complemento (idComplemento)
);

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR (30),
    Sobrenome VARCHAR (50),
    CPF CHAR (11),
    Email_Corporativo VARCHAR (80),
    Senha VARCHAR (45),
    fkEmpresa INT,
    fkTelefone INT,
    fkGrupo INT,
    fkPermissao INT,
    CONSTRAINT fkEmpresaUsuario FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa),
    CONSTRAINT fkTelefoneUsuario FOREIGN KEY (fkTelefone) REFERENCES Telefone (idTelefone),
    CONSTRAINT fkGrupo FOREIGN KEY (fkGrupo) REFERENCES Grupo (idGrupo),
    CONSTRAINT fkPermissaoUsuario FOREIGN KEY (fkPermissao) REFERENCES Permissao (idPermissao)
);

CREATE TABLE Dispositivo (
	idDispositivo INT PRIMARY KEY AUTO_INCREMENT,
    Num_Serie INT,
    Setor_Empresa VARCHAR (45),
    IP VARCHAR (50),
    Sistema_Operacional VARCHAR (45),
    fkEmpresa INT,
    CONSTRAINT fkEmpresaDispositivo FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa)
);

CREATE TABLE Acesso (
	LogAcesso INT,
    fkUsuario INT,
    fkDispositivo INT,
    Inicio_Sessao DATETIME,
    Fim_Sessao DATETIME,
    CONSTRAINT fkUsuarioAcesso FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
    CONSTRAINT fkDispositivo FOREIGN KEY (fkDispositivo) REFERENCES Dispositivo (idDispositivo)
);

CREATE TABLE Componentes(
	idComponente INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR (45),
    Descricao VARCHAR (100),
    tipoMedida VARCHAR (45),
    fkDispositivo INT,
    CONSTRAINT fkDispositivoComponente FOREIGN KEY (fkDispositivo) REFERENCES Dispositivo (idDispositivo)
);

CREATE TABLE Monitoramento(
	idDado INT PRIMARY KEY AUTO_INCREMENT,
    DadoCapturado FLOAT,
    Data_Hora DATETIME,
    fkComponente INT,
    CONSTRAINT fkComponenteMonitoramento FOREIGN KEY (fkComponente) REFERENCES Componentes (idComponente)
);

CREATE TABLE Alerta (
	idAlerta INT PRIMARY KEY AUTO_INCREMENT,
    Nivel VARCHAR (45),
    Descricao VARCHAR (100),
    fkComponente INT,
    fkDados INT,
    CONSTRAINT fkDadosAlerta FOREIGN KEY (fkDados) REFERENCES Monitoramento (idDado),
    CONSTRAINT fkComponenteAlerta FOREIGN KEY (fkComponente) REFERENCES Componentes (idComponente)
);
