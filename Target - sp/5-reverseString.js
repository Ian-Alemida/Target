const readline = require("readline-sync");

//  função que reverte a strirng
function reverseString() {
  let inputString = readline.question("Digite a string que deseja inverter: "); //pergunta ao usuário qual string inverter
  let stringInvertida = "";

  //Percorre pela string de trás para frente e vai adicionando a letra atual a variável 'stringInvertida'
  for (i = inputString.length - 1; i >= 0; i--) {
    stringInvertida += inputString[i];
  }
  console.log(stringInvertida);
}

reverseString();
