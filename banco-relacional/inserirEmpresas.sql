ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
(nome,cnpj)
VALUES
('Bradesco',98524158949),
('Vale',2545612315646),
('Cielo',01256345615113);

/*descrever empresas*/
desc empresas;
desc prefeitos;

INSERT INTO empresas_unidades
(empresa_id,cidade_id,sede)
VALUES
(16,1,1),
(16,2,0),
(17,1,0),
(17,2,1);

delete from empresas_unidades
where empresa_id = 1 or empresa_id = 2 

