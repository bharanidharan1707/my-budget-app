import React, { useState, useEffect } from 'react';
import ExpenseEntry from './components/ExpenseEntry/ExpenseEntry';
import ExpenseListing from './components/ExpenseListing/ExpenseListing';
import HeaderTotal from './components/HeaderTotal/HeaderTotal';

function App() {
  // Sample data
  const initialRecords = [];
  const [records, setRecords] = useState(initialRecords);
  const [totalExp, setTotal] = useState(0);
  const [expDateValue, setExpDateValue] = useState('');
  const [expDescValue, setExpDescValue] = useState('');
  const [expAmtValue, setExpAmtValue] = useState('');

  const handleDateChange = (event) => { setExpDateValue(event.target.value); }; 
  const handleExpDescChange = (event) => { setExpDescValue(event.target.value); }; 
  const handleExpAmtChange = (event) => { 
    setExpAmtValue(event.target.value); 
    
  }; 
  
  const addExpense = () => {
    if(expDateValue.length > 0){
      const newRecord = { date: expDateValue, expdesc: expDescValue, expamt: expAmtValue};
      setRecords([...records, newRecord]);
      setExpDateValue("");
      setExpDescValue("");
      setExpAmtValue("");
      setTotal(parseFloat(totalExp) + parseFloat(expAmtValue));
    }
  };
  
  return (
    <div>
      <HeaderTotal totalExp={totalExp}></HeaderTotal> 
      <ExpenseEntry expDateValue={expDateValue} expDescValue={expDescValue} expAmtValue={expAmtValue} handleDateChange={handleDateChange} handleExpDescChange={handleExpDescChange} handleExpAmtChange={handleExpAmtChange} addExpense={addExpense}/>
      <ExpenseListing records={records} />
    </div>
  );
}

export default App;
