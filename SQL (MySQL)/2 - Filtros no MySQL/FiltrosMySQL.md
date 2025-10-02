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