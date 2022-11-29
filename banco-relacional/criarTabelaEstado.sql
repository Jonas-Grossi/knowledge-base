--Criando a tabela estado!
create table estados(
    --inteiro sem sinal nao nulo auto incrementado(chave surrogate key)
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
sigla VARCHAR(2) NOT NULL,
--ENUMERACAO--
regiao ENUM('Norte','Nordeste','Centro-Oeste','Sudeste','Sul') NOT NULL,
--5 digitos decimal e 2 digitos ponto flutuante
populacao DECIMAL(5,2) NOT NULL,
PRIMARY KEY (id), 
--NAO ACEITA DUPLICITADE NO NOME E NA SIGLA   
UNIQUE KEY (nome),
UNIQUE KEY (sigla)
);
