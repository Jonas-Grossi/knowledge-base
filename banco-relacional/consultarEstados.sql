/*selecionar todos de estados*/
SELECT * from estados

/*selecionar nome e sigla de estados*/
SELECT nome, sigla from estados
/*selecionar primeiro a sigla e depois o nome colocando o titulo acima de nomes */
select sigla,nome as 'Nome do Estado' from estados
/*onde regiao e sul */
where regiao ='sul'

SELECT nome, regiao,populacao from estados
where populacao >=10
order by populacao desc