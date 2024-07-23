import "./App.css";
import FinancialForm from "./Components/FinancialForm";
import { useState } from "react";
import Result from "./Components/Result";

function App() {
  const [result, setResult] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Metrics Analysis</h1>
      </header>
      <Result result={result} />
      <FinancialForm setResult={setResult} />
    </div>
  );
}

export default App;
