import './Expenseitems.css';

function Expenseitems() {
    const expenseDate=new Date(2021,2,28);
    const expenseTitle="Car Insurance";
    const expenseAmount =400;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div>
        <h2 className="expense-item__description">{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default Expenseitems;
