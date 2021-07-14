import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';


const Dummy_Expenses = [
  { id: 1, title: "Books", date: new Date(2021, 2, 12), amount: 400 },
  { id: 2, title: "Table", date: new Date(2021, 3, 22), amount: 300 },
  { id: 3, title: "Mobile", date: new Date(2021, 4, 23), amount: 200 },
  { id: 4, title: "Laptop", date: new Date(2021, 5, 11), amount: 150 }
];

const App=()=> {

 const [expenses, setExpenses] =useState(Dummy_Expenses);

  const addExpenseHandler =(expense) =>{

    //console.log(expense)

    //setExpenses([expense, ...expenses]);
    
      setExpenses((preexpense)=>{
        return [expense, ...preexpense];
      });
 
  }

  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
