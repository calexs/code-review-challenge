# Mais um

Você recebe um inteiro grande representado como um vetor de dígitos inteiros, 
onde cada `digits[i]` é o `i-ésimo` dígito do inteiro. Os dígitos são ordenados do 
mais significativo para o menos significativo na ordem da esquerda para a direita. 
O número inteiro grande não contém nenhum zero à esquerda.

> Incremente o inteiro grande em um e retorne `o vetor de dígitos resultante`.

## Exemplo 1:
```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: O vetor representa o inteiro 123.
Incrementando em um, 123 + 1 = 124.
Portanto, o resultado deveria ser [1,2,4].
```

## Exemplo 2:
```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: O vetor representa o inteiro 4321.
Incrementando em um, 4321 + 1 = 4322.
Portanto, o resultado deveria ser [4,3,2,2].
```

## Exemplo 3:
```
Input: digits = [9]
Output: [1,0]
Explanation: O vetor representa o inteiro 9.
Incrementando em um, 9 + 1 = 10.
Portanto, o resultado deveria ser [1,0].
```

## Restrições:
- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- `digits` não contém nenhum zero à esquerda.