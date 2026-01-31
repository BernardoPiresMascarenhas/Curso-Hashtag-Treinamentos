# GROUP BY + WHERE

Conseguimos utilizar o `WHERE` em conjunto com o `GROUP BY` para criar filtros antes de realizar os agrupamentos. Por exemplo, mostrar o total de clientes por escolaridade, só que apenas os clientes do sexo feminino.

#### Ex 1:

Crie um agrupamento mostrando o total de clientes por escolaridade, mas apenas os clientes do sexo feminino. 

```sql
SELECT Escolaridade, COUNT(*) AS 'Qtd Clientes'
FROM cliente 
WHERE Sexo = 'F'
GROUP BY Escolaridade;
```


# GROUP BY + HAVING

Conseguimos utilizar o `HAVING` em conjunto com o `GROUP BY` para criar filtros depois de um determinado agrupamento. Por exemplo, mostrar apenas os produtos que tiveram uma receita total acima de um determinado valor. 

#### Ex 1: 

Crie um agrupamento mostrando o total de clientes por escolaridade. Filtre o agrupamento resultante para mostrar apenas as escolaridades com mais de 25 clientes.

```sql
SELECT Escolaridade, COUNT(*) AS 'Qtd Clientes'
FROM clientes
GROUP BY Escolaridade
HAVING COUNT(*) > 25;
```

#### Ex 2:

Crie um agrupamento mostrando o total de receitas por ID_Produto. Filtre o agrupamento resultante para mostrar apenas os produtos que tiveram uma receita total superior a R$5MM.


```sql
SELECT ID_Produto, SUM(Receita_Venda) AS 'Receita Total'
FROM pedidos
GROUP BY ID_Produto
HAVING SUM(Receita_Venda) >= 5000000;
```