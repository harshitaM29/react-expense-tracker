import classes from './ExpenseItem.module.css';
import ExpenseDetails from './ExpenseDetails';
import { useContext } from 'react';
import {expenseActions} from '../../store/expense';
import {useDispatch} from 'react-redux'

const ExpenseItem = props => {
  
    const dispatch = useDispatch()
    const removeExpenses = (id) => {
       dispatch(expenseActions.deleteExpense(id))
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