const calculadora = require("../../models/calculadora");

test("somar 2 + 2 deve retornar 4", () => {
  const resultado = calculadora.somar(2, 2, "+");
  console.log("Resultado da soma:", resultado);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deve retornar 105", () => {
  const resultado = calculadora.somar(5, 100, "+");
  console.log("Resultado da soma:", resultado);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deve retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 100, "+");
  console.log("Resultado da soma:", resultado);
  expect(resultado).toBe("Erro");
});

test("multiplicação 2 * 0 deve retornar 0", () => {
  const resultado = calculadora.somar(2, 0, "*");
  console.log("Resultado da multiplicação:", resultado);
  expect(resultado).toBe(0);
});

test("subtração 2 - 3 deve retornar -1", () => {
  const resultado = calculadora.somar(2, 3, "-");
  console.log("Resultado da subtração:", resultado);
  expect(resultado).toBe(-1);
});


