import { Fragment } from 'react';
import classes from './ExpenseItem.module.css';

const ExpenseDetails = (props) => {
    return (
    <Fragment>
        <div className={classes.description}>
       <h2>Description: {props.title}</h2>
            <h2>Category: {props.des}</h2>
            
            <div className={classes.price}>Price: {props.amount}</div>
        </div>
         
         </Fragment>
    )
};

export default ExpenseDetails;