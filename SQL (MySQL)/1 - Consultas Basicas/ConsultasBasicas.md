# Consultas Básicas  

1. **Selecionar todas as colunas de uma tabela**  

📌 **Objetivo:** Retornar todos os dados de uma tabela.  

```sql
SELECT * FROM produtos;

```
**Resultado esperado:**

| ID_Produto | Nome_Produto | Marca_Produto | Num_Serie |Preco_Unit | Custo_Uit |
|----|-------------|-------| ----------- |------------ | -------|
| 1  | Monitor LED 19,5" Full HD HDMI   | DELL | MNT-DL-831923 |2300 | 966 |
| 2  | Monitor Curvo 24" 144Hz HDMI | SAMSUNG | MNT-SS-001939 |2800 | 980 |
| 3  | Webcam Full HD 1080p | LOGITECH | WBC-LT-934GG4 |450 | 90 |
| 4  | Kit Teclado + Mouse sem fio Wireless | DELL | KTM-DL-041039 |350 | 129.5 |
| 5  | Kit Teclado + Mouse Slim Bluetooth | DELL | KTM-DL-111924 |280 | 109.2 |
| 6  | Cadeira Gamer reclinável Azul/Laranja | ALTURA | CGM-AL-9N914J |1800 | 540 |


 2. **Selecionar tabelas específicas:**
   
   📌 **Objetivo**: Otimizar a consulta retornando apenas os dados necessários, melhorando a performance e a clareza.
   
```sql

   SELECT ID_Produto, Nome_Produto, Marca_Produto FROM produtos;

```
**Resultado esperado:**

| ID_Produto | Nome_Produto | Marca_Produto |
|----|-------------|-------| 
| 1  | Monitor LED 19,5" Full HD HDMI   | DELL |
| 2  | Monitor Curvo 24" 144Hz HDMI | SAMSUNG | 
| 3  | Webcam Full HD 1080p | LOGITECH | 
| 4  | Kit Teclado + Mouse sem fio Wireless | DELL |
| 5  | Kit Teclado + Mouse Slim Bluetooth | DELL | 
| 6  | Cadeira Gamer reclinável Azul/Laranja | ALTURA | 


3. **Renomear o nome da Coluna e Tabela:**

📌 **Objetivo**: Utilizar `AS` para criar apelidos (aliases) que cumprem duas funções principais:

- **Para Colunas**: Renomear colunas no resultado final, tornando os cabeçalhos mais claros, curtos ou amigáveis para relatórios e aplicações (ex: `Nome_Produto` se torna `Produto`).

- **Para Tabelas**: Encurtar o nome das tabelas (ex: `produtos` se torna `p`), o que simplifica a escrita da consulta e é essencial em operações mais complexas como `JOINs`.
   
```sql

   SELECT p.ID_Produto, 
          p.Nome_Produto AS 'Produto', 
          p.Marca_Produto AS 'Marca' 
          FROM produtos AS p;

```

**Resultado esperado:**

| ID_Produto | Produto | Marca |
|----|-------------|-------| 
| 1  | Monitor LED 19,5" Full HD HDMI   | DELL |
| 2  | Monitor Curvo 24" 144Hz HDMI | SAMSUNG | 
| 3  | Webcam Full HD 1080p | LOGITECH | 
| 4  | Kit Teclado + Mouse sem fio Wireless | DELL |
| 5  | Kit Teclado + Mouse Slim Bluetooth | DELL | 
| 6  | Cadeira Gamer reclinável Azul/Laranja | ALTURA |

4. **LIMIT, utilizado para limitar o número de resultados SELECT:**

📌 **Objetivo**: Melhorar a performance e obter uma amostra rápida dos dados. É a forma mais eficiente de inspecionar o conteúdo de tabelas muito grandes sem a necessidade de uma varredura completa.

```sql

SELECT * FROM produtos LIMIT 3;

```

**Resultado esperado:**

| ID_Produto | Nome_Produto | Marca_Produto | Num_Serie |Preco_Unit | Custo_Uit |
|----|-------------|-------| ----------- |------------ | -------|
| 1  | Monitor LED 19,5" Full HD HDMI   | DELL | MNT-DL-831923 |2300 | 966 |
| 2  | Monitor Curvo 24" 144Hz HDMI | SAMSUNG | MNT-SS-001939 |2800 | 980 |
| 3  | Webcam Full HD 1080p | LOGITECH | WBC-LT-934GG4 |450 | 90 |

5. **LIMIT + OFFSET, utilizado para limitar o número de resultados SELECT e definir a partir de qual linha a consulta deve começar:**

📌 **Objetivo**: Selecionar uma "fatia" ou "janela" específica de registros de um resultado. O `LIMIT` determina o tamanho da fatia, enquanto o `OFFSET` determina o ponto de início dessa fatia dentro do conjunto de dados completo.

```sql

SELECT * FROM produtos LIMIT 3 OFFSET 2;

```

**Resultado esperado:**

| ID_Produto | Nome_Produto | Marca_Produto | Num_Serie |Preco_Unit | Custo_Uit |
|----|-------------|-------| ----------- |------------ | -------|
| 3  | Webcam Full HD 1080p | LOGITECH | WBC-LT-934GG4 |450 | 90 |
| 4  | Kit Teclado + Mouse sem fio Wireless | DELL | KTM-DL-041039 |350 | 129.5 |
| 5  | Kit Teclado + Mouse Slim Bluetooth | DELL | KTM-DL-111924 |280 | 109.2 |

6. **Selecionar valores distintos em uma coluna:**

📌 **Objetivo**: Remover duplicatas de um resultado de consulta. O `DISTINCT` garante que cada valor retornado para a coluna (ou conjunto de colunas) especificada seja único. É a ferramenta ideal para perguntas como "Quais são todas as marcas diferentes que vendemos?" ou "Quais categorias de produtos existem na loja?".

```sql

SELECT DISTINCT Marca_Produto FROM produtos;

```

**Resultado esperado:**

| Marca_Produto |
|-------|
| DELL |
| SAMSUNG |
| LOGITECH |
| ALTURA |

7. **`ODER BY`, ordenar de forma crescente (ASC) ou decrescente (DESC):**

📌 **Objetivo**: Organizar (ou "ordenar") as linhas do resultado de uma consulta em uma sequência específica, com base nos valores de uma ou mais colunas. É essencial para apresentar dados de forma lógica e para facilitar análises. A ordenação pode ser:

`ASC` (Ascendente): Do menor para o maior (A-Z, 0-9, datas mais antigas para as mais novas).

`DESC` (Descendente): Do maior para o menor (Z-A, 9-0, datas mais novas para as mais antigas).

- Ordem Crescente:

```sql

SELECT * FROM produtos ORDER BY Preco_Unit ASC;

```

**Resultado esperado:**

| ID_Produto | Nome_Produto | Marca_Produto | Num_Serie |Preco_Unit | Custo_Uit |
|----|-------------|-------| ----------- |------------ | -------|
| 5  | Kit Teclado + Mouse Slim Bluetooth | DELL | KTM-DL-111924 |280 | 109.2 |
| 4  | Kit Teclado + Mouse sem fio Wireless | DELL | KTM-DL-041039 |350 | 129.5 |
| 3  | Webcam Full HD 1080p | LOGITECH | WBC-LT-934GG4 |450 | 90 |
| 6  | Cadeira Gamer reclinável Azul/Laranja | ALTURA | CGM-AL-9N914J |1800 | 540 |
| 1  | Monitor LED 19,5" Full HD HDMI   | DELL | MNT-DL-831923 |2300 | 966 |
| 2  | Monitor Curvo 24" 144Hz HDMI | SAMSUNG | MNT-SS-001939 |2800 | 980 |

- Ordem Decrescente:

```sql

SELECT * FROM produtos ORDER BY Preco_Unit DESC;

```

**Resultado esperado:**

| ID_Produto | Nome_Produto | Marca_Produto | Num_Serie |Preco_Unit | Custo_Uit |
|----|-------------|-------| ----------- |------------ | -------|
| 2  | Monitor Curvo 24" 144Hz HDMI | SAMSUNG | MNT-SS-001939 |2800 | 980 |
| 1  | Monitor LED 19,5" Full HD HDMI   | DELL | MNT-DL-831923 |2300 | 966 |
| 6  | Cadeira Gamer reclinável Azul/Laranja | ALTURA | CGM-AL-9N914J |1800 | 540 |
| 3  | Webcam Full HD 1080p | LOGITECH | WBC-LT-934GG4 |450 | 90 |
| 4  | Kit Teclado + Mouse sem fio Wireless | DELL | KTM-DL-041039 |350 | 129.5 |
| 5  | Kit Teclado + Mouse Slim Bluetooth | DELL | KTM-DL-111924 |280 | 109.2 |