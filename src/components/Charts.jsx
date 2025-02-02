import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useExpense } from "../context/ExpenseContext";

const Charts = ({ activeTab }) => {
  const { transactions } = useExpense();

  const incomeData = transactions
    .filter((t) => t.amount > 0)
    .map((t) => ({ name: t.category, value: t.amount }));

  const expenseData = transactions
    .filter((t) => t.amount < 0)
    .map((t) => ({ name: t.category, value: Math.abs(t.amount) }));

  const colors = activeTab === "income"
    ? ["#064E3B", "#047857", "#10B981", "#6EE7B7"]
    : ["#7F1D1D", "#B91C1C", "#EF4444", "#FCA5A5"];

  return (
    <div className={`shadow-lg rounded-lg p-4 mt-4 transition-all duration-300 ${
      activeTab === "income" ? "bg-white text-black" : "bg-black text-red-400"
    }`}>
      <h3 className="text-lg font-semibold text-center mb-2">
        {activeTab === "income" ? "Income Breakdown" : "Expense Breakdown"}
      </h3>

      <PieChart width={300} height={300}>
        <Pie
          data={activeTab === "income" ? incomeData : expenseData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill={activeTab === "income" ? "#10B981" : "#EF4444"}
          dataKey="value"
        >
          {(activeTab === "income" ? incomeData : expenseData).map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Charts;
