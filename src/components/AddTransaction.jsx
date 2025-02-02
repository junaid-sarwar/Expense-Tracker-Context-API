import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";

const AddTransaction = ({ type }) => {
  const { addTransaction } = useExpense();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (!amount || !category) return;

    addTransaction({
      id: Date.now(),
      amount: type === "expense" ? -Math.abs(parseFloat(amount)) : Math.abs(parseFloat(amount)),
      category,
    });

    setAmount("");
    setCategory("");
  };

  return (
    <div className={`bg-gray-800 shadow-md rounded-lg p-6 mt-6 w-full md:w-96 ${
      type === "income" ? "bg-white text-black" : "bg-black text-red-400"
    }`}>
      <h3 className="text-xl font-semibold mb-4">
        {type === "income" ? "Add Income" : "Add Expense"}
      </h3>
      
      <input
        type="text"
        placeholder="Category (e.g. Salary, Rent, Grocery)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="button"
        onClick={handleSubmit}
        className={`w-full p-2 rounded font-semibold ${
          type === "income" ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"
        }`}
      >
        {type === "income" ? "Add Income" : "Add Expense"}
      </button>
    </div>
  );
};

export default AddTransaction;
