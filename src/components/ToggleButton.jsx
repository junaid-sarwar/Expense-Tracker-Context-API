const ToggleButton = ({ activeTab, setActiveTab }) => {
    return (
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setActiveTab("income")}
          className={`px-6 py-2 rounded-md font-medium bg-gray-700 hover:bg-gray-600 transition ${
            activeTab === "income" ? "bg-green-600 text-white" : "bg-gray-400 text-white"
          }`}
        >
          Income
        </button>
  
        <button
        onClick={() => setActiveTab("expense")}
        className={`px-6 py-2 rounded-md font-medium bg-gray-700 hover:bg-gray-600 transition ${
          activeTab === "expense" ? "bg-red-600 text-white" : "bg-gray-400 text-white"
        }`}
      >
        Expense
      </button>
    </div>
  );
};

export default ToggleButton;
  