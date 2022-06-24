# Maior Substring sem caractéres repetidos

Dada uma *string* `s`, descubra o tamanho da maior *substring* sem repetição de caractéres.

**Exemplo 1**
```
  Entrada: s = "abcabcbb"
  Saída: 3
  Explicação: A resposta é "abc", com o tamanho 3.
```
**Exemplo 2**
```
  Entrada: s = "bbbbb"
  Saída: 1
  Explicação: A resposta é "b", com o tamanho 1.
```
**Exemplo 3**
```
  Entrada: s = "pwwkew"
  Saída: 3
  Explicação: A resposta é "wke", com o tamanho 3.
  Atenção, a reposta deve ser uma substring, "pwke" é uma subsequência e não uma substring.
```
**Restrições**
- 0 <= s.length <= 5 * 104.
- `s` consiste em letras, digitos, símbolos e espaços.