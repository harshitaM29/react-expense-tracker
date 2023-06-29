import { Fragment } from "react";
import Home from "../components/Home/Home";
import NewExpenses from "../components/NewExpenses/NewExpenses";
import ExpenseList from "../components/Expenses/ExpenseList";
import { expenseActions } from '../store/expense';
import Premium from "../components/Premium/Premium";
import {useDispatch, useSelector} from 'react-redux';
import Toggle from "../components/Premium/Toggle";

const HomePage = () => {
 
    const dispatch = useDispatch();
    const receivedExpenses = useSelector(state => state.expense.expense)
    const addExpenseHandler = expense => {
        dispatch(expenseActions.addExpenses(expense));
    }
    let expenses = []
    if(receivedExpenses !== null){
        expenses = receivedExpenses;
    }
    let totalAmount = 0;
    receivedExpenses.map(item => (
        totalAmount = totalAmount + Number(item.amount)
    ));
    return (
    <Fragment>
    <Home />
    <Toggle />
    <NewExpenses onAddExpense={addExpenseHandler}/>
    {totalAmount > 10000 && <Premium expenses={expenses} amount={totalAmount}/>}
    {/* {isPremiumActive && <DownloadButton />} */}
    <ExpenseList items={(receivedExpenses !== null) ? receivedExpenses : ''} />
    </Fragment>
    )
}

export default HomePage;