const faturamento = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 },
];

let total = 0;
// Define o valor total
faturamento.forEach((i) => {
  total += i.valor;
});

// Faz uma regra de 3 com base no valor total para descobrir o percentual do valor atual
function regraDe3(faturamento, total) {
  faturamento.map((i) => {
    x = (i.valor * 100) / total;

    console.log(
      `Com $${i.valor}, o estado ${
        i.estado
      } representa um percentual de ${x.toFixed(
        2
      )}% do valor total de $${total}`
    );
  });
}

regraDe3(faturamento, total);
