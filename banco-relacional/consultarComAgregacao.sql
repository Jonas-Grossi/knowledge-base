/*selecionar titulo regiao e somar a populacao colocando titulo total de estados,
agrupamento por regiao e ordenando por ordem decrescente*/
SELECT regiao as 'Região',
sum(populacao) as Total
from `estados`
GROUP BY regiao
order by Total desc


select avg(populacao) as Total
from `estados`