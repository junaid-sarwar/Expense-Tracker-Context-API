import { useExpense } from "../context/ExpenseContext";

const Balance = () => {
  const { transactions } = useExpense();
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="bg-gray-800 shadow-md rounded-lg p-6 text-center mt-6 w-80">
      <h2 className="text-lg text-white font-semibold">Balance</h2>
      <p className={`text-2xl font-bold ${total >= 0 ? "text-green-500" : "text-red-500"}`}>
        ${total.toFixed(2)}
      </p>
    </div>
  );
};

export default Balance;
