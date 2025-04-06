function calcularContaEnergia(
  consumoKWh: number,
  tarifaPorKWh: number,
  impostoPercentual: number,
  bandeira: "verde" | "amarela" | "vermelha"
): number {
  let valorBase = consumoKWh * tarifaPorKWh;

  let acrescimo = 0;
  switch (bandeira) {
    case "amarela":
      acrescimo = 0.02 * consumoKWh;
      break;
    case "vermelha":
      acrescimo = 0.05 * consumoKWh;
      break;
    case "verde":
    default:
      acrescimo = 0;
      break;
  }

  let subtotal = valorBase + acrescimo;

  let valorFinal = subtotal + (subtotal * impostoPercentual) / 100;

  return parseFloat(valorFinal.toFixed(2));
}

const conta = calcularContaEnergia(250, 0.65, 18, "vermelha");
console.log(`Valor final da conta: R$ ${conta}`);
