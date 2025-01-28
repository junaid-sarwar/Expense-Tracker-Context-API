import { useExpense } from "../context/ExpenseContext";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useExpense();

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
      <h3 className="text-xl font-semibold mb-3">Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center p-3 border-b last:border-none"
          >
            <span className="font-medium">{transaction.category}</span>
            <span className={`font-semibold ${transaction.amount >= 0 ? "text-green-500" : "text-red-500"}`}>
              {transaction.amount >= 0 ? "+" : "-"}${Math.abs(transaction.amount)}
            </span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
