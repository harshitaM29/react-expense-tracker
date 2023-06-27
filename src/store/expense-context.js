import React from "react";

const ExpenseContext = React.createContext({
    expense:[],
    addExpenses:()=>{},
    deleteExpense:() => {}
})

export default ExpenseContext;