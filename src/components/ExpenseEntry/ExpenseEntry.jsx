export default function ExpenseEntry({expDateValue , expDescValue, expAmtValue, handleDateChange, handleExpDescChange, handleExpAmtChange, addExpense}) {
    return (
        <div>
          <input type="date" id="txt_date" value={expDateValue} onChange={handleDateChange} ></input> 
          <input type="text" id="txt_expdesc" value={expDescValue} onChange={handleExpDescChange}></input> 
          <input type="number" id="txt_expamt" value={expAmtValue} onChange={handleExpAmtChange}></input> 
          <button onClick={addExpense}>Add Record</button>
        </div>
      );
  }