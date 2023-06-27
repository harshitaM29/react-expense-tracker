import { useState } from "react";
import ExpenseContext from "./expense-context";
const ExpenseContextProvider = props => {
    const [expense,setExpense] = useState([]);

    const addExpenseHandler = (expense) => {
        setExpense(preExpenses => {
            return [expense,...preExpenses]
          })
    }

    const expenseContext = {
        expense:expense,
        addExpenses:addExpenseHandler
            
    }

    console.log(expense)
    return (

        
        <ExpenseContext.Provider value={expenseContext}>
            {props.children}
        </ExpenseContext.Provider>
    )

};

export default ExpenseContextProvider;