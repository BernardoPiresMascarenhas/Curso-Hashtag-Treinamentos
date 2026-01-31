# Introdução - Variáveis 

### O que é uma variável:

Uma variável é um local onde armazenamos um determinado valor, que pode ser usado ao longo do nosso código.

#### Por exemplo: 

```sqL
SELECT *
FROM produtos
WHERE Marca_Produtos = 'SAMSUNG';
```

```sqL
SET @varMarca = 'SAMSUNG';

SELECT *
FROM produtos
WHERE Marca_Produtos = @varMarca;
```
