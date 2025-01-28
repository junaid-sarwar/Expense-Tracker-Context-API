import { useExpense } from "../context/ExpenseContext";

const Balance = () => {
  const { transactions } = useExpense();
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center mt-4">
      <h2 className="text-lg font-semibold">Balance</h2>
      <p className={`text-2xl font-bold ${total >= 0 ? "text-green-500" : "text-red-500"}`}>
        ${total.toFixed(2)}
      </p>
    </div>
  );
};

export default Balance;
