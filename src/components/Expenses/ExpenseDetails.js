import { Fragment, useState } from 'react';
import classes from './ExpenseItem.module.css';
import EditExpense from './EditExpense';



const ExpenseDetails = (props) => {
    const [isShown, setIsShown] = useState(false);
    
    const redirectToEdit = () => {
        setIsShown(current => !current);
    }
    return (
  
   <Fragment>
        <div className={classes.description}>
       <h2>{props.title}</h2>
            <h2>{props.des}</h2>
            
            <div className={classes.price}>{props.amount}</div>
       
        </div>
        <div className={classes.action}>
            {/* <Route path='/edit'>
                <EditPage />
            </Route> */}
            <button onClick={props.onRemove}>Delete</button>
           <button onClick={redirectToEdit}>Edit</button>
          {isShown && <EditExpense items={props} />}
            </div> 

            </Fragment>
      
    )
};

export default ExpenseDetails;