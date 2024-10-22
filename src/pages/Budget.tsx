import React from "react";

const Budget = () => {
  return (
    <div>
      <h1>Configure Monthly Budget</h1>

      <form>
        <label htmlFor="currency">Choose a currency:</label>
        <select id="currency" name="currency">
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="CHF">CHF - Swiss Franc</option>
          <option value="CNY">CNY - Chinese Yuan</option>
          <option value="INR">INR - Indian Rupee</option>
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

<button className=" my-2 inline-flex font-bold justify-center  shadow p-3 rounded-lg border border-2 bg-blue-600 text-white text-lg">Save</button>
      </form>
    </div>
  );
};

export default Budget;
