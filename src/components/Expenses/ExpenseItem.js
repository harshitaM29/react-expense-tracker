import classes from './ExpenseItem.module.css';
import ExpenseDetails from './ExpenseDetails';
import ExpenseContext from '../../store/expense-context';
import { useContext } from 'react';

const ExpenseItem = props => {
    const expenseCart = useContext(ExpenseContext)
    const removeExpenses = (id) => {
        expenseCart.deleteExpense(id);
    }

    const editExpenseHandler = (item) => {
        
    }
  
    return (
       <li>
           <ExpenseDetails id={props.id} title={props.title} amount={props.amount} des={props.des} 
           onRemove={removeExpenses.bind(null,props.id)} onEdit={editExpenseHandler.bind(null,props)} />
         
            
    </li>
        
      
        
    )

}

export default ExpenseItem