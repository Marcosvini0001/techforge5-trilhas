export function validarCPF(cpf: string): boolean {
  const cpfLimpo = cpf.replace(/[^\d]/g, "");

  if (cpfLimpo.length !== 11 || /^(\d)\1{10}$/.test(cpfLimpo)) {
    return false;
  }

  const digitos = cpfLimpo.split("").map(Number);

  let soma1 = 0;
  for (let i = 0; i < 9; i++) {
    soma1 += digitos[i] * (10 - i);
  }
  let digito1 = 11 - (soma1 % 11);
  if (digito1 >= 10) digito1 = 0;

  let soma2 = 0;
  for (let i = 0; i < 10; i++) {
    soma2 += digitos[i] * (11 - i);
  }
  let digito2 = 11 - (soma2 % 11);
  if (digito2 >= 10) digito2 = 0;

  return digito1 === digitos[9] && digito2 === digitos[10];
}
