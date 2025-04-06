import { validarCPF } from "../trilha3/testeSoftware";

describe("Função validarCPF", () => {
  test("Deve retornar true para um CPF válido", () => {
    expect(validarCPF("529.982.247-25")).toBe(true);
  });

  test("Deve retornar false para CPF com dígitos verificadores incorretos", () => {
    expect(validarCPF("529.982.247-00")).toBe(false);
  });

  test("Deve retornar false para CPF com menos de 11 dígitos", () => {
    expect(validarCPF("123.456.789")).toBe(false);
  });

  test("Deve retornar false para CPF com letras ou caracteres inválidos", () => {
    expect(validarCPF("abc.def.ghi-jk")).toBe(false);
  });

  test("Deve retornar false para CPF com todos os dígitos iguais", () => {
    expect(validarCPF("111.111.111-11")).toBe(false);
  });
});
