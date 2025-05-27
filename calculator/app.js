// Elimina los imports y usa directamente las funciones (o define todo en un solo archivo)
const calculate = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  let result;
  if (operator === "sum") result = num1 + num2; // Operación directa
  else if (operator === "resta") result = num1 - num2;
  else if (operator === "multiplicacion") result = num1 * num2;
  else if (operator === "division") {
    if (num2 === 0) {
      alert("No se puede dividir entre cero");
      return;
    }
    result = num1 / num2;
  } else {
    alert("el operador no es correcto");
    return;
  }

  document.getElementById("result").textContent = `Resultado: ${result}`;
};
