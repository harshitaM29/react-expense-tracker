import classes from './ExpenseItem.module.css';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = props => {
    return (
       <li>
           <ExpenseDetails title={props.title} amount={props.amount} des={props.des} />
            
    </li>
        
      
        
    )

}

export default ExpenseItem