import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useExpense } from "../context/ExpenseContext";

const PieChartComponent = () => {
  const { transactions } = useExpense();

  // Filter income and expense separately
  const incomeData = transactions
    .filter((t) => t.amount > 0)
    .map((t) => ({ name: t.category, value: t.amount }));

  const expenseData = transactions
    .filter((t) => t.amount < 0)
    .map((t) => ({ name: t.category, value: Math.abs(t.amount) }));

  // Define color shades for differentiation
  const incomeColors = ["#064E3B", "#047857", "#10B981", "#6EE7B7"]; // Dark to light green
  const expenseColors = ["#7F1D1D", "#B91C1C", "#EF4444", "#FCA5A5"]; // Dark to light red

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-4 flex flex-col md:flex-row justify-between items-center">
      {/* Left Side - Income Chart */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-green-600 mb-2">Income Breakdown</h3>
        <PieChart width={250} height={250}>
          <Pie data={incomeData} cx="50%" cy="50%" outerRadius={80} fill="#10B981" dataKey="value">
            {incomeData.map((_, index) => (
              <Cell key={`income-${index}`} fill={incomeColors[index % incomeColors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* Right Side - Expense Chart */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-red-600 mb-2">Expense Breakdown</h3>
        <PieChart width={250} height={250}>
          <Pie data={expenseData} cx="50%" cy="50%" outerRadius={80} fill="#EF4444" dataKey="value">
            {expenseData.map((_, index) => (
              <Cell key={`expense-${index}`} fill={expenseColors[index % expenseColors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartComponent;
