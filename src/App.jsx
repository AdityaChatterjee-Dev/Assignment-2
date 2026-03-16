function App() {
  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => b !== 0 ? a / b : "Cannot divide by zero";
    return (
    <div style={{display: "flex",justifyContent: "center", alignItems: "center", height: "100vh",  backgroundColor: "#f0f0f0", }}>
      <div style={{border: "2px solid #333",borderRadius: "10px",padding: "20px",backgroundColor: "white", textAlign: "center", width: "300px",}}>
        <h2>Calculator</h2>
        <p>Addition: {add(num1, num2)}</p>
        <p>Subtraction: {subtract(num1, num2)}</p>
        <p>Multiplication: {multiply(num1, num2)}</p>
        <p>Division: {divide(num1, num2)}</p>
      </div>
    </div>
  );
}

export default App;
