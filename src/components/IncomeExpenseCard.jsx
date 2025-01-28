import { useExpense } from "../context/ExpenseContext";

const IncomeExpenseCard = () => {
  const { transactions } = useExpense();

  const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="flex justify-between p-4 bg-white shadow-md rounded-lg">
      <div className="text-center w-1/2 border-r">
        <h3 className="text-lg font-semibold text-green-500">Income</h3>
        <p className="text-xl font-bold">${income}</p>
      </div>
      <div className="text-center w-1/2">
        <h3 className="text-lg font-semibold text-red-500">Expense</h3>
        <p className="text-xl font-bold">${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenseCard;
