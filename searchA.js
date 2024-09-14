const readline = require("readline-sync");

function searchA() {
  let contador = 0;

  let inputString = readline.question("Digite a string que deseja verificar: ");

  // Itera sobre todos os caracteres da string
  for (let i = 0; i < inputString.length; i++) {
    // Verifica se o caractere atual é 'a' ou 'A'
    if (inputString[i] === "a" || inputString[i] === "A") {
      contador++;
    }
  }

  // Verifica se a letra 'a' foi encontrada
  if (contador > 0) {
    console.log(`A letra 'a' aparece ${contador} vezes na string.`);
  } else {
    console.log("A letra 'a' não foi encontrada na string.");
  }
}

searchA();
