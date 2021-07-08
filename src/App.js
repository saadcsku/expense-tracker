import React from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';

const App=()=> {

  const expenses = [
    { id: 1, title: "Books", date: new Date(2021, 2, 12), amount: 400 },
    { id: 2, title: "Table", date: new Date(2021, 3, 22), amount: 300 },
    { id: 3, title: "Mobile", date: new Date(2021, 4, 23), amount: 200 },
    { id: 4, title: "Laptop", date: new Date(2021, 5, 11), amount: 150 }
  ];

  return (
    <div>
     <NewExpense />
        <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
