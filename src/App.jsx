import { ExpenseProvider } from "./context/ExpenseContext";
import Balance from "./components/Balance";
import IncomeExpenseCard from "./components/IncomeExpenseCard";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import PieChartComponent from "./components/PieChart";

function App() {
  return (
    <ExpenseProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">💰 Expense Tracker</h1>
        <Balance />
        <IncomeExpenseCard />
        <TransactionList />
        <AddTransaction />
        
        {/* Pie Charts Section */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-4">
          <PieChartComponent />
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
