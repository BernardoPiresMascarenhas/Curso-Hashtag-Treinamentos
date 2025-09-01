## Consultas Básicas  

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


