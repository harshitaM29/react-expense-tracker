import { Fragment, useCallback, useEffect, useState } from "react";
import Home from "../components/Home/Home";
import NewExpenses from "../components/NewExpenses/NewExpenses";
import ExpenseList from "../components/Expenses/ExpenseList";
import { expenseActions } from '../store/expense';
import Premium from "../components/Premium/Premium";
import {useDispatch, useSelector} from 'react-redux';

const HomePage = () => {
 
    const dispatch = useDispatch();
    const email = localStorage.getItem("email");
    const isLogin = useSelector(state => state.auth.isLoggedIn)
   const emailId = isLogin ? email.split('@')[0] : '';
    const receivedExpenses = useSelector(state => state.expense.expense)
const fetchData = useCallback(() => {
    fetch(`https://react-expense-tracker-40f44-default-rtdb.firebaseio.com/expense${emailId}.json?print=pretty`,)
            .then(res => res.json())
            .then(data => dispatch(expenseActions.fetchData(data)))
}, [])
    useEffect(() => {
       fetchData()
    }, [fetchData])
    const addExpenseHandler = expense => {
        dispatch(expenseActions.addExpenses(expense));
    }
    let expenses = []
    if(receivedExpenses !== null){
        expenses = receivedExpenses;
    }
    let totalAmount = 0;
    Object.values(receivedExpenses).map(item => {
        totalAmount = totalAmount + Number(item.amount)
    });

    return (
    <Fragment>
    <Home />
    <NewExpenses onAddExpense={addExpenseHandler}/>
    {totalAmount > 10000 && <Premium />}
    <ExpenseList items={(receivedExpenses !== null) ? receivedExpenses : ''} />
    </Fragment>
    )
}

export default HomePage;