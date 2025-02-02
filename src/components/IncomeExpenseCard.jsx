import { useExpense } from "../context/ExpenseContext";

const IncomeExpenseCard = () => {
  const { transactions } = useExpense();

  const income = transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="flex justify-between divide-x divide-gray-600 w-full md:w-1/3 mt-2.5 mb-2.5 p-4 bg-white shadow-md rounded-lg">
      <div className="text-center w-1/2 border-r pr-6">
        <h3 className="text-lg font-semibold text-green-500">Income</h3>
        <p className="text-xl text-green-500 font-bold">${income}</p>
      </div>
      <div className="text-center w-1/2">
        <h3 className="text-lg font-semibold text-red-500">Expense</h3>
        <p className="text-xl text-red-500 font-bold">${Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenseCard;
