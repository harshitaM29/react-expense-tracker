import classes from './ExpenseForm.module.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDes, setEnteredDes] = useState('');

    const updateTitle = (e) =>{
        setEnteredTitle(e.target.value);
    }

    const updateAmount = (e) =>{
        setEnteredAmount(e.target.value);

    }
    const updateDes = (e) => {
        setEnteredDes(e.target.value);
    }
    const addExpense = (e) => {
        e.preventDefault();
        
        const expenseDetails = {
            title: enteredTitle,
            amount: enteredAmount,
            des:enteredDes
        }
        console.log(expenseDetails)
        props.onSaveExpenseData(expenseDetails);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDes('');
        props.onCancel();
    }
    const cancelForm = (e) => {
        props.onCancel();
    }
    return (
        <div>
            
        <form onSubmit={addExpense}>
       <div className={classes.controls}>
           <div className={classes.control}>
               <label>Expense Description</label><br />
               <input type="text" id="title" value={enteredTitle} onChange={updateTitle}/>
           </div>
           <div className={classes.control}>
               <label>Expense Amount</label><br />
               <input type="number" id="amount" value={enteredAmount} min="0.01" step="0.01" onChange={updateAmount}/>
           </div>
           <div className={classes.control}>
               <label>Expense Category</label><br />
               <select id="category" name="category" value={enteredDes} onChange={updateDes}>
                <option>Select Category</option>
             <option value="Fuel">Fuel</option>
             <option value="Food">Food</option>
             <option value="Electricity">Electricity</option>
             <option value="Movies">Movies</option>
           </select>
           </div>
           
       </div>
       <div className={classes.actions}>
               <button type= "button" onClick={cancelForm}>Cancel</button>
              <button type="submit">Add Expense</button>
           </div>
       </form>
    
       <ul id="myList"></ul>
       </div>
    )

}

export default ExpenseForm;