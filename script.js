// Exercício 1: Comidas Favoritas 
function imprimirComidasFavoritas() {
    const nome = prompt("Qual o seu nome?");
    const comida1 = prompt("Digite sua primeira comida favorita:");
    const comida2 = prompt("Digite sua segunda comida favorita:");
    const comida3 = prompt("Digite sua terceira comida favorita:");
  
    console.log(`Estas são as comidas favoritas de ${nome}:\n- ${comida1}\n- ${comida2}\n- ${comida3}`);
  }
  imprimirComidasFavoritas();
  
  
  // Exercício 2: Manipulando a string
  function manipularString(minhaString) {
    const antes = minhaString.length;
    const stringSemEspacos = minhaString.trim();
    const depois = stringSemEspacos.length;
    const novaFrase = stringSemEspacos.replace("________", "sticioso");
  
    console.log(`Antes: ${antes} caracteres\nDepois: ${depois} caracteres\nNova frase: ${novaFrase}`);
  }
  
  // Exemplo de uso do exercício 2
  const minhaString = "Eu não sou supersticioso, mas sou um pouco ______.    ";
  manipularString(minhaString);
  
  
  // Exercício 3: Trocando cores da frase
  const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';
  
  function trocarCores(fraseOriginal) {
    let novaFrase = fraseOriginal.replace("verde", "rosa").replace("azul", "laranja");
  
    // Transformar "mas não deixe o gato sair" para maiúsculo
    novaFrase = novaFrase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR");
  
    const contemVerde = novaFrase.includes("verde");
    const contemLaranja = novaFrase.includes("laranja");
  
    console.log(`Frase modificada:\n${novaFrase}`);
    console.log(`Contém "verde"? ${contemVerde}`);
    console.log(`Contém "laranja"? ${contemLaranja}`);
  }
  trocarCores(frase);
  