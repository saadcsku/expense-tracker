import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './Expenseitems.css';

function Expenseitems(props) {


  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />

      </div>
      <div className="expense-item__description">
         <h2 >{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default Expenseitems;
