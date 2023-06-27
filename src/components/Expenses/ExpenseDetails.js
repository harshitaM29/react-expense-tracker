import { Fragment } from 'react';
import classes from './ExpenseItem.module.css';
import EditExpense from './EditExpense';
import {useHistory} from 'react-router-dom'

const ExpenseDetails = (props) => {

    const history = useHistory()
    const redirectToEdit = () => {
       history.replace('/edit')
    }
    return (
    <Fragment>
        <div className={classes.description}>
       <h2>{props.title}</h2>
            <h2>{props.des}</h2>
            
            <div className={classes.price}>{props.amount}</div>
       
        </div>
        <div className={classes.action}>
            <button onClick={props.onRemove}>Delete</button>
            <button onClick={redirectToEdit}>Edit</button>
            </div>
         </Fragment>
    )
};

export default ExpenseDetails;