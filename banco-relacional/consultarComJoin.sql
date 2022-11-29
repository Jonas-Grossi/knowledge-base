/*selecionar estados dando o apelido e d cidades dando o apelido c*/
select * from estados e, cidades c
/*onde e.id = c.estados_id onde as chaves devem primaria e estrangeira devem combinar(se nao usar faz todas combinacoes)*/
where e.id = c.estado_id;


select 
e.nome as Estados,
c.nome as Cidade,
regiao as Região
from estados e, cidades c
where e.id = c.estado_id;


select 
c.nome as Cidade,
e.nome as Estado,
regiao as Região
/*inner join para dizer a outra tabela que voce quer juntar depois do on passa a colunas que vao ser*/
from estados e inner join cidades c on e.id=c.estado_id