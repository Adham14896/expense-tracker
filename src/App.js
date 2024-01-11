import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import "./index.css";
import TransactionForm from "./components/TransactionForm";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <TransactionForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
