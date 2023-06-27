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
            
            return [expense,...Object.values(preExpenses)]
          })

              fetch(`https://react-expense-tracker-40f44-default-rtdb.firebaseio.com/expense${email}.json`,{
                method:'POST',
                body:JSON.stringify(expense),
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
        .then(data => setExpense(data))

    },[]);

    useEffect(() => {
        fetchData();
    },[fetchData])

   

    const deleteExpenseHandler = (id) => {
       const key = Object.keys(expense).find(key => expense[key].id === id)
        fetch(`https://react-expense-tracker-40f44-default-rtdb.firebaseio.com/expense${email}/${key}.json?print=pretty`,{
            method:'DELETE'
        })
        .then(res => {
            if(res.ok) {
                console.log("expenses deleted successfully")
            }
        })

       
    }

    const expenseContext = {
        expense:expense,
        addExpenses:addExpenseHandler,
        deleteExpense:deleteExpenseHandler
            
    }


    return (

        
        <ExpenseContext.Provider value={expenseContext}>
            {props.children}
        </ExpenseContext.Provider>
    )

};

export default ExpenseContextProvider;