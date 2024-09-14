const readline = require("readline-sync");

// Verificar se o número faz parte da sequência de Fibonacci
function isFibonacci(inputNumber) {
  if (inputNumber < 0) return false;

  // Gera a sequência de Fibonacci até ultrapassar o inputNumber
  let fibNum1 = 0;
  let fibNum2 = 1;
  while (fibNum1 <= inputNumber) {
    if (fibNum1 === inputNumber) {
      return true;
    }
    let nextFibNum = fibNum1 + fibNum2;
    fibNum1 = fibNum2;
    fibNum2 = nextFibNum;
  }
  return false;
}

// Função principal que lê a entrada do user e retorna se pertence a sequência de Fibonacci
function checkFibonacci() {
  let inputNumber = Number(
    readline.question(
      "Qual numero voce deseja checar se pertence a sequencia fibonacci? "
    )
  );
  if (isFibonacci(inputNumber)) {
    console.log(`${inputNumber} PERTENCE à sequência de Fibonacci.`);
  } else {
    console.log(`${inputNumber} NÃO pertence à sequência de Fibonacci.`);
  }
}

checkFibonacci();
