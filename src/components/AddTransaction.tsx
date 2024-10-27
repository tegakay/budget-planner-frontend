import React from "react";

const AddTransaction = () => {
  return (
    <div>
      <h2>Add A Transaction</h2>

      <form className="grid">
        <label htmlFor="Type" className="text-xs">Type:</label>
        <select id="Type" name="Type" className="my-2 border border-2 shadow p-3 rounded-lg">
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>

        <label className="text-xs">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="0"
          step="0.01"
          placeholder="0.00"
          className="my-2 border border-2 shadow p-3 rounded-lg"
        />

        <label htmlFor="category" className="text-xs">Category:</label>
        <select id="category" name="category" className="my-2 border border-2 shadow p-3 rounded-lg">
          <option value="Work">Work</option>
          <option value="Play">Play</option>
        </select>

        <button className=" my-2 inline-flex font-bold justify-center  shadow p-3 rounded-lg border border-2 bg-blue-600 text-white text-lg">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
