import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";

const AddTransaction = () => {
  const { addTransaction } = useExpense();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (isExpense) => {
    if (!amount || !category) return;

    addTransaction({
      id: Date.now(),
      amount: isExpense ? -Math.abs(parseFloat(amount)) : Math.abs(parseFloat(amount)),
      category,
    });

    setAmount("");
    setCategory("");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
      <h3 className="text-xl font-semibold mb-3">Add Transaction</h3>
      
      <input
        type="text"
        placeholder="Category (e.g. Salary, Rent, Grocery)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => handleSubmit(false)}
          className="w-1/2 bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Add Income
        </button>
        <button
          type="button"
          onClick={() => handleSubmit(true)}
          className="w-1/2 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddTransaction;
