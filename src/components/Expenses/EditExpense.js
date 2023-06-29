import classes from './EditExpense.module.css';
import {  useState } from 'react';
import {expenseActions} from '../../store/expense';
import {useDispatch} from 'react-redux'
const EditExpense = props => {

    const dispatch = useDispatch();
    const [enteredTitle, setEnteredTitle] = useState(props.items.title);
    const[enteredAmount, setEnteredAmount] = useState(props.items.amount);
    const[enteredDes, setEnteredDes] = useState(props.items.des);

    const updateTitle = (e) =>{
        setEnteredTitle(e.target.value);
    }

    const updateAmount = (e) =>{
        setEnteredAmount(e.target.value);

    }
    const updateDes = (e) => {
        setEnteredDes(e.target.value);
    }
    const editExpenseData = (e) => {
        e.preventDefault();
        const updatedExpense = {
            title: enteredTitle,
            amount: enteredAmount,
            des:enteredDes,
            id:props.items.id
        }
        dispatch(expenseActions.editExpense(updatedExpense))
        props.onClose();
       

    }
  return (
<div className={classes.expense}>
            
    <form onSubmit={editExpenseData}>
   <div className={classes.controls}>
       <div className={classes.control}>
           <label>Expense Description</label><br />
           <input type="text" id="title" 
          value={enteredTitle} 
        onChange={updateTitle}
           />
       </div>
       <div className={classes.control}>
           <label>Expense Amount</label><br />
           <input type="number" id="amount" 
            value={enteredAmount}
            min="0.01" step="0.01"
                onChange={updateAmount}
             />
       </div>
       <div className={classes.control}>
           <label>Expense Category</label><br />
           <select id="category" name="category" 
          value={enteredDes} 
            onChange={updateDes}
           >
            <option>Select Category</option>
         <option value="Fuel">Fuel</option>
         <option value="Food">Food</option>
         <option value="Electricity">Electricity</option>
         <option value="Movies">Movies</option>
       </select>
       </div>
       
   </div>
   <div className={classes.actions}>
           {/* <button type= "button" onClick={cancelForm}>Cancel</button> */}
          <button type="submit">Edit Expense</button>
       </div>
   </form>

 
   </div> 

)
  
};

export default EditExpense;