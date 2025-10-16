# Filtros no MySQL

#### WHERE

- Introdução:
O comando `WHERE` tem como objetivo filtrar as linhas de uma tabela
    
- Sintaxe:

```sql
SELECT Coluna1, Coluna2, Coluna3
FROM Tabela
WHERE Coluna1 = valor;
```
##### Exemplos:

- Filtrar cliente do sexo masculino
```sql
SELECT * FROM clientes WHERE Sexo = 'M';
```
- Filtrar para clientes que nasceram apos o dia 01/01/2000. Lembrar de deixar no formato AAAA-MM-DD

```sql
SELECT * FROM clientes WHERE Data_Nascimento > '2000-01-01';
```

#### Operadores AND, OR e NOT

- Introdução:
O comando `WHERE` pode ser usado em conjunto com os operadores `AND` e `OR` para filtrar mas de uma coluna ao mesmo tempo, e também com o operador `NOT`, para criar negações.

##### Comando AND
```sql
SELECT * FROM clientes WHERE Sexo = 'F' AND Escolaridade = 'Parcial';
```
##### Comando OR
```sql
SELECT * FROM produtos WHERE Marca_Produto = 'DELL' OR Marca_Produto = 'SAMSUNG';
```
##### Comando NOT
```sql
SELECT * FROM produtos WHERE NOT Marca_Produto = 'DELL';
```

##### Outros exemplos:

```sql
SELECT * FROM produtos WHERE Marca_Produto = 'DELL' AND Preco_Unit >= 2000;
```

```sql
SELECT * FROM produtos WHERE NOT Marca_Produto = 'DELL' AND NOT Marca_Produto = 'SAMSUNG';
```

#### IS NULL e  IS NOT NULL

- Introdução:
O comando `WHERE` pode ser usado em conjunto com o `IS NULL` ou `IS NOT NULL` para filtrar apenas as linhas que são nulas ou não são nulas, respectivamente.

##### Exemplos: 

- Descubra quais clientes não cadastraram o celular. 

```sql
SELECT * 
FROM clientes 
WHERE Telefone IS NULL;
```

- Quais lojas que cadastraram um contato telefonico.

```sql
SELECT *
FROM lojas
WHERE Telefone IS NOT NULL;
```

##### Importante: não confunda null com vazio (' ')

##### WHERE (LIKE)

- Introdução: 
  O comando `WHERE` pode ser usado em conjunto com o `LIKE` para filtrar as linhas que contenham determinado valor.

##### Exemplos: 

- Descubra quais clientes possuem um e-mail do gmail.

```sql
SELECT *
FROM clientes
WHERE Email LIKE '%gmail%';
```

- Descruba quis clientes possuem um e-mail terminado em '.br'

```sql
SELECT *
FROM clientes 
WHERE Email LIKE '%.br';
```

##### WHERE (IN E NOT IN)

- Introdução:
  O comando `WHERE` pode ser usado em conjunto com o `IN` ou `NOT IN` como uma alternativa ao operador lógico `OR`. Com ele é possivel filtrar apenas linhas que contenham um dos valores especificados em uma lista de valores.

##### Exemplos:

- Faça um filtro que retorne todos os produtos de uma das 3 marcas a seguir: DELL, SONY ou ALTURA.
  
```sql
SELECT *
FROM produtos
WHERE Marca_Produto IN ('DELL', 'SONY', 'ALTURA');
```

- Faça um filtro que retorne todos os produtos que não seja de uma das 3 marcas a seguir: DELL, SONY ou ALTURA.

```sql
SELECT *
FROM produtos
WHERE Marca_Produto NOT IN ('DELL', 'SONY', 'ALTURA');
```

##### WHERE (BETWEEN)

- Introdução:
  O comando `WHERE` pode ser usado em conjunto com o `BETWEEN` para filtrar intervalos. Esses intervalos podem ser números ou de datas.

##### Exemplos:

- Faça um filtro que retorne todos os produtos com Preco_Unit entre R$1.000 e R$2.500.

```sql
SELECT *
FROM produtos
WHERE Preco_Unit BETWEEN 1000 AND 2500;
```

- Faça um filtro que retorne todos os clientes que nasceram entre 01/01/1995 e 31/12/1999.

```sql
SELECT *
FROM clientes
WHERE Data_Nascimento BETWEEN '1995-01-01' AND '1999-12-31';
```