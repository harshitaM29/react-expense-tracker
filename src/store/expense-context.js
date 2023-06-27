import React from "react";

const ExpenseContext = React.createContext({
    expense:[],
    addExpenses:()=>{},
    deleteExpense:() => {},
    editExpense:() => {}
})

export default ExpenseContext;