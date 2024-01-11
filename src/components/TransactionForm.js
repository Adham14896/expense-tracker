import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function TransactionForm() {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmitTransaction(e) {
    e.preventDefault();
    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  }

  return (
    <>
      <form onSubmit={onSubmitTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Something..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            amount (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount..."
          />
        </div>
        <button className="btn" onClick={onSubmitTransaction}>
          Add Expense
        </button>
      </form>
    </>
  );
}

export default TransactionForm;
