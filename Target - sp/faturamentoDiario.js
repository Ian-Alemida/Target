const dados = require("./dados.json");

//função que verifica  o menor faturamento
function menorFaturamento(vetor) {
  let menorFaturamento = 9999999;
  let diaMenorFaturamento;

  // itera por cada item do vetor
  vetor.map((i) => {
    faturamentoDia = Number(i.valor); // define o faturamento do dia como sendo o  valor do índice atual
    if (faturamentoDia < menorFaturamento && faturamentoDia > 0) {
      // verifica se o faturamento do dia é menor do que o menor valor que temos armazenado e se é maior que 0
      menorFaturamento = faturamentoDia; // caso seja define o menor faturamento para o valor atual
      diaMenorFaturamento = i.dia; //salva o dia do menor faturamento
    }
  });

  console.log(
    `• O menor valor de faturamento foi $${menorFaturamento}. Ocorrido no dia ${diaMenorFaturamento}`
  );
}
//função que verifica o maior faturamento funciona  de maneira semelhante a função menorFaturamento
function maiorFaturamento(vetor) {
  let maiorFaturamento = 0;
  let diaMaiorFaturamento;

  vetor.map((i) => {
    faturamentoDia = Number(i.valor);

    if (faturamentoDia > maiorFaturamento) {
      maiorFaturamento = faturamentoDia;
      diaMaiorFaturamento = i.dia;
    }
  });

  console.log(
    `• O maior valor de faturamento foi $${maiorFaturamento}. Ocorrido no dia ${diaMaiorFaturamento}`
  );
}

// Verifica o número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
function mediaMensal(vetor) {
  let soma = 0;
  let diasComFaturamento = 0;
  let mediaMensal;

  // calcula a media mensal, ignorando os dias sem faturamento
  vetor.map((i) => {
    soma = soma + Number(i.valor);
    if (Number(i.valor) > 0) {
      diasComFaturamento++;
    }
  });
  mediaMensal = soma / diasComFaturamento;

  // Conta em quantos dias o faturamento foi superior a media
  let count = 0;
  vetor.map((i) => {
    faturamentoDia = Number(i.valor);
    if (faturamentoDia > mediaMensal) {
      count++;
    }
  });

  console.log(
    `• A soma total das vendas é: $${soma}; \n• A media mensal é: $${mediaMensal}; \n• O faturamento diário foi superior à média mensal em ${count} dias dos ${diasComFaturamento} contabilizados;`
  );
}

// Função unindo todas as respostas
function respostas(vetor) {
  menorFaturamento(vetor);
  console.log(
    "-------------------------------------------------------------------------"
  );
  maiorFaturamento(vetor);
  console.log(
    "-------------------------------------------------------------------------"
  );
  mediaMensal(vetor);
}

respostas(dados);
