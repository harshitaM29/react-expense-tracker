import { Fragment, useContext } from "react";
import Home from "../components/Home/Home";
import NewExpenses from "../components/NewExpenses/NewExpenses";
import ExpenseContext from "../store/expense-context";
import ExpenseList from "../components/Expenses/ExpenseList";
const HomePage = () => {
    const expenseContext = useContext(ExpenseContext);

    const addExpenseHandler = expense => {
        expenseContext.addExpenses(expense);
    }
    let expenses = []
    if(expenseContext.expense !== null){
        expenses = expenseContext.expense;
    }
    return (
    <Fragment>
    <Home />
    <NewExpenses onAddExpense={addExpenseHandler}/>
    <ExpenseList items={expenses} />
    </Fragment>
    )
}

export default HomePage;