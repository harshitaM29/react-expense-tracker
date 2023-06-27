import React from "react";

const ExpenseContext = React.createContext({
    expense:[],
    addExpenses:()=>{}
})

export default ExpenseContext;