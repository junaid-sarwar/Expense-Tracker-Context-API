import { createContext, useReducer, useContext } from "react";

const initialState = {
  transactions: [],
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <ExpenseContext.Provider value={{ transactions: state.transactions, addTransaction, deleteTransaction }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  return useContext(ExpenseContext);
};
