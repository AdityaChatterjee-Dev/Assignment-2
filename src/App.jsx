function App() {
  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";

  return (
    <div>
      <p>Addition: {add(num1, num2)}</p>
      <p>Subtraction: {subtract(num1, num2)}</p>
      <p>Multiplication: {multiply(num1, num2)}</p>
      <p>Division: {divide(num1, num2)}</p>
    </div>
  );
}

export default App;
