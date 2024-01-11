import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {
  const [{ transactions }, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({ type: "delete", payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: "add", payload: transaction });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
