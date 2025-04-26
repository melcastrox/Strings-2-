
# 🧠 Atividades 02- Manipulando Strings com JavaScript

## 📚 O que aprendemos nesta atividade

- Como declarar e usar funções
- Como capturar entradas do usuário com `prompt`
- Como trabalhar com **strings** no JavaScript
  - Concatenação e template strings
  - Métodos úteis: `.trim()`, `.replace()`, `.toUpperCase()`, `.includes()`
  - Inserir quebras de linha com `\n`

---

## ✍️ Exercício 1 - imprimirComidasFavoritas()

### 🎯 Objetivo:
Pedir o nome do usuário e suas 3 comidas favoritas e imprimir tudo com **apenas um console.log()**.

### ✅ Exemplo de saída:
```
Estas são as comidas favoritas de Lucas:
- Pizza
- Sushi
- Sorvete
```

### 💡 Dica:
Use template strings com CRASE (`` ` ``) para facilitar a quebra de linha com `\n`.

---

## ✍️ Exercício 2 - analisarString()

### 🎯 Objetivo:
A partir da seguinte string:

```js
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```

Realizar as seguintes tarefas:

1. Mostrar o número de caracteres **antes e depois** de remover espaços no final
2. Substituir os traços (`________`) pela palavra “sticioso”

### ✅ Exemplo de saída:
```
Antes: 58
Depois: 52
Frase corrigida: Eu não sou supersticioso, mas sou um pouco sticioso.
```

---

## ✍️ Exercício 3 - editarFrase()

### 🎯 Objetivo:
A partir da frase:

```js
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';
```

Realizar as seguintes alterações:

1. Substituir “verde” por “rosa” e “azul” por “laranja”
2. Verificar se a nova frase contém as palavras “verde” e “laranja”
3. **EXTRA:** Transformar “mas não deixe o gato sair” em letras MAIÚSCULAS

### ✅ Exemplo de saída:
```
Nova frase: Jorge tem uma casa rosa e com portão laranja, com os dizeres: "BOAS VINDAS, MAS NÃO DEIXE O GATO SAIR"
Contém 'verde'? false
Contém 'laranja'? true
```

---

## 🚀 Como testar os exercícios

1. Abra seu navegador e o console do DevTools (F12)
2. Copie e cole o código de cada exercício no console
3. Interaja com os `prompt()` para inserir suas informações

---



