import React, { useState } from 'react';

function App() {
  // Sample data
  const initialRecords = [];

  const [records, setRecords] = useState(initialRecords);

  const [expDateValue, setExpDateValue] = useState('');
  const [expDescValue, setExpDescValue] = useState('');
  const [expAmtValue, setExpAmtValue] = useState('');

  const handleDateChange = (event) => { setExpDateValue(event.target.value); }; 
  const handleExpDescChange = (event) => { setExpDescValue(event.target.value); }; 
  const handleExpAmtChange = (event) => { setExpAmtValue(event.target.value); }; 

  const addExpense = () => {
    if(expDateValue.length > 0){
      const newRecord = { date: expDateValue, expdesc: expDescValue, expamt: expAmtValue};
      setRecords([...records, newRecord]);
      setExpDateValue("");
      setExpDescValue("");
      setExpAmtValue("");
    }
  };

  const saveExpenses = () => {
    if(expDateValue.length > 0){
      const newRecord = { date: expDateValue, expdesc: expDescValue, expamt: expAmtValue};
      setRecords([...records, newRecord]);
      setExpDateValue("");
      setExpDescValue("");
      setExpAmtValue("");
    }
  };
  return (
    <div>
      <input type="date" id="txt_date" value={expDateValue} onChange={handleDateChange} ></input> 
      <input type="text" id="txt_expdesc" value={expDescValue} onChange={handleExpDescChange}></input> 
      <input type="number" id="txt_expamt" value={expAmtValue} onChange={handleExpAmtChange}></input> 
      <button onClick={addExpense}>Add Record</button>
      <Grid records={records} />
      <button onClick={saveExpenses}>Save</button>
    </div>
  );
}

function Grid({ records }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Exp. Date</th>
          <th>Expense Description</th>
          <th>Expense Amount</th>
        </tr>
      </thead>
      <tbody>
        {records.map(record => (
          <tr key={record.expdesc}>
            <td>{record.date}</td>
            <td>{record.expdesc}</td>
            <td>{record.expamt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
