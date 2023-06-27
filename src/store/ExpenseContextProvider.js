import { useCallback, useContext, useEffect, useState } from "react";
import ExpenseContext from "./expense-context";
import AuthContext from "./auth-context";;
const ExpenseContextProvider = props => {
    const authCtx = useContext(AuthContext);
    const email = authCtx.isLoggedIn ? authCtx.emailId.split('@')[0] : '';
    const [expense,setExpense] = useState([]);
    const [receivedExpenses,setReceivedExpenses] = useState([]);
    const addExpenseHandler = (expense) => {
        setExpense(preExpenses => {
            return [expense,...preExpenses]
          })

              fetch(`https://react-expense-tracker-40f44-default-rtdb.firebaseio.com/expense${email}.json`,{
                method:'POST',
                body:JSON.stringify({
                    ...expense,
                    email:email
                }),
                headers: {
                    'Content-Type':'application.json'
                }
              }).then(res => {
                if(res.ok) {
                    console.log(res)
                }
              })
    }
    const fetchData = useCallback(() => {
        fetch(`https://react-expense-tracker-40f44-default-rtdb.firebaseio.com/expense${email}.json?print=pretty`,)
        .then(res => res.json())
        .then(data => setExpense(Object.values(data)))

    },[]);

    useEffect(() => {
        fetchData();
    },[fetchData])



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