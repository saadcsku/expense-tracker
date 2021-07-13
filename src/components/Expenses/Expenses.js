import React from 'react';
import Expenseitems from "./Expenseitems";
import Card from '../UI/Card';
import './Expenses.css'

const expenses=(props)=> {
    return (
        <Card className="expenses">
            {props.items.map(expense => <Expenseitems key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>)}
           </Card>
    )
}
export default expenses;

