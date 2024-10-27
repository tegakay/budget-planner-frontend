import React from 'react'

const SetBudget = () => {
  return (
    <div>
        <h2>Set Monthly Income</h2>
        <form>
        <label htmlFor="Type" className="text-xs">Set Monthly Budget</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="0"
          step="0.01"
          placeholder="0.00"
          className="my-2 border border-2 shadow p-3 rounded-lg"
        />
        <button className=" my-2 inline-flex font-bold justify-center  shadow p-3 rounded-lg border border-2 bg-blue-600 text-white text-lg">
          Save
        </button>
        </form>
    </div>
  )
}

export default SetBudget