import logo from "./logo.svg";
import "./App.css";
import FinancialForm from "./Components/FinancialForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Metrics Analysis</h1>
      </header>
      <FinancialForm />
    </div>
  );
}

export default App;
