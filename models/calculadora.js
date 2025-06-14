function somar(a, b, operacao) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Erro: Os valores devem ser números.");
    return "Erro";
  }
  switch (operacao) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operação inválida";
  }
}

exports.somar = somar;
