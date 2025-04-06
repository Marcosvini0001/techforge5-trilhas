interface ConsumoEnergia {
  kwh: number;
  tarifa: number;
  imposto: number;
  bandeira: "verde" | "amarela" | "vermelha";
}

function calcularValorBase(consumo: number, tarifa: number): number {
  return consumo * tarifa;
}

function calcularAjusteBandeira(consumo: number, bandeira: string): number {
  switch (bandeira) {
    case "amarela":
      return consumo * 0.02;
    case "vermelha":
      return consumo * 0.05;
    case "verde":
    default:
      return 0;
  }
}

function calcularImposto(valor: number, percentualImposto: number): number {
  return valor * (percentualImposto / 100);
}

function calcularAjusteConsumoEficiente(
  valorTotal: number,
  consumoKwh: number
): number {
  if (consumoKwh <= 100) {
    return -valorTotal * 0.05;
  } else if (consumoKwh > 300) {
    return valorTotal * 0.1;
  }
  return 0;
}

function calcularContaEnergia(consumo: ConsumoEnergia): number {
  const valorBase = calcularValorBase(consumo.kwh, consumo.tarifa);
  const ajusteBandeira = calcularAjusteBandeira(consumo.kwh, consumo.bandeira);
  const subtotal = valorBase + ajusteBandeira;
  const valorImposto = calcularImposto(subtotal, consumo.imposto);
  const totalComImposto = subtotal + valorImposto;
  const ajusteEficiencia = calcularAjusteConsumoEficiente(
    totalComImposto,
    consumo.kwh
  );
  const valorFinal = totalComImposto + ajusteEficiencia;

  return parseFloat(valorFinal.toFixed(2));
}

const conta1: ConsumoEnergia = {
  kwh: 90,
  tarifa: 0.6,
  imposto: 10,
  bandeira: "verde",
};

const conta2: ConsumoEnergia = {
  kwh: 320,
  tarifa: 0.7,
  imposto: 12,
  bandeira: "vermelha",
};

console.log("Conta 1:", calcularContaEnergia(conta1));
console.log("Conta 2:", calcularContaEnergia(conta2));
