# Operações Básicas e Funções de Agregação

#### Operações Básicas e Funções de arredondamento.

- Operações Básicas:
```sql
10 + 20 AS Soma,
100 - 40 AS Subtração,
5 * 20 AS Multiplicação,
300 / 12 AS Divisão;
(100 - 10) * 4 AS Operação,
22 % 5 AS Resto da divisão; 
```

- Funções de arredondamento:
  
```sql
SELECT 
   ROUND(87.149, 2) AS 'Arred.', 
   FLOOR(87.149) AS 'Arred. p/ baixo', 
   CEILING(87.149) AS 'Arred. p/ cima';
   TRUNCATE(87.149, 2) AS 'Truncar';
```

- ROUND: arredonda determinado valor com uma quantidade específica de casas decimais.
- FLOOR: arredonda um valor para baixo.
- CEILING: arredonda um valor para cima. 
- TRUNCATE: não arredonda mas mantem o valor em x casas decimais.
  
#### COUNT, COUNT(*) e COUNT(DISTINCT)

- Introdução:
  Funções que realizam contagens de valores nas nossas tabelas.


##### COUNT

###### Exemplos:

- Conte a quantidade de clientes a partir da coluna Nome.

```sql
SELECT COUNT(Nome) AS 'Quantidade'
FROM clientes;
```

- Conte a quantidade de clientes a partir da coluna Telefone.

```sql
SELECT COUNT(Telefone) AS 'Quantidade'
FROM clientes;
```

##### COUNT(*)

###### Exemplos:

- Conte a quantidade total de linahs da tabela de CLIENTES.

```sql
SELECT COUNT(*) AS 'Quantidade'
FROM clientes;
```

##### COUNT(DISTINCT)

###### Exemplos

- Conte a quantidade de marcas distintas na tabela PRODUTOS.

```sql
SELECT COUNT(DISTINCT Marca_Produto) AS 'Quantidade'
FROM produtos;
```


#### SUM, AVG, MIN e MAX

- SUM: soma os valores de uma coluna.
- AVG: calcula a média dos valores de uma coluna.
- MIN: retorna o menor valor de uma coluna.
- MAX: retorna o maior valor de uma coluna.

##### Exemplos

```sql
SELECT SUM(Receita_Venda) AS 'Soma de Receita'
FROM pedidos;

SELECT AVG(Receita_Venda) AS 'Média de Receita'
FROM pedidos;

SELECT MIN(Receita_Venda) AS 'Menor Receita'
FROM pedidos;

SELECT MAX(Receita_Venda) AS 'Maior Receita'
FROM pedidos;
```