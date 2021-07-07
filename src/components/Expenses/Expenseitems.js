import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './Expenseitems.css';

const Expenseitems=(props)=> {

  let title=props.title;

  const clickHandler=() =>{

    title="Wasi is back"
    console.log("Button Clicked " +title )
  
  }
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />

      </div>
      <div className="expense-item__description">
         <h2 >{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Click</button>
      </div>
    </Card>
  );
}
export default Expenseitems;
