import { useState } from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import Balance from "./components/Balance";
import IncomeExpenseCard from "./components/IncomeExpenseCard";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Charts from "./components/Charts";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [activeTab, setActiveTab] = useState("income");

  return (
    <ExpenseProvider>
      <div
        className={`min-h-screen flex flex-col items-center p-6 bg-gradient-to-r from-slate-900 to-emerald-500 transition-all duration-300 ${
          activeTab === "expense" ? "bg-gradient-to-r from-slate-900 to-red-500 text-red-400" : "bg-gray-100 text-black"
        }`}
      >
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          💰 Expense Tracker
        </h1>
        
        <Balance />
        <IncomeExpenseCard />
        
        {/* Toggle Buttons */}
        <ToggleButton activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Show Forms Conditionally */}
        {activeTab === "income" ? <AddTransaction type="income" /> : <AddTransaction type="expense" />}
        
        {/* Show Pie Chart Based on Active Tab */}
        <Charts activeTab={activeTab} />
        
        <TransactionList />
      </div>
    </ExpenseProvider>
  );
}

export default App;
