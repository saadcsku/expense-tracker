import Expenseitems from "./Expenseitems";
import Card from './Card'
import './Expenses.css'
function expenses(props) {
    return (
        <Card className="expenses">
            <Expenseitems title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount}></Expenseitems>
            <Expenseitems title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount}></Expenseitems>
            <Expenseitems title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount}></Expenseitems>
            <Expenseitems title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount}></Expenseitems>
        </Card>
    )
}
export default expenses;

