import "./App.css";
import FinancialForm from "./Components/FinancialForm";
import { useState } from "react";
import Result from "./Components/Result";

function App() {
  const [result, setResult] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Market Analysis</h1>
      </header>
      {result.length > 0 && <Result result={result} />}
      {result.length === 0 || (
        <button className="clearBtn" onClick={() => setResult("")}>
          Clear Result
        </button>
      )}
      {result.length === 0 && <FinancialForm setResult={setResult} />}
    </div>
  );
}

export default App;
