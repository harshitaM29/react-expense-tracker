import {createSlice} from '@reduxjs/toolkit';


const email = localStorage.getItem("email")


const initialExpenseState = {expense: [], totalAmount: 0}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState:initialExpenseState,
    reducers: {
        addExpenses(state,action) {
           
            fetch(`https://react-expense-tracker-40f44-default-rtdb.firebaseio.com/expense${email}.json`,{
                method:'POST',
                body:JSON.stringify(action.payload),
                headers: {
                    'Content-Type':'application.json'
                }
              }).then(res => {
                if(res.ok) {
                    console.log(res)
                }
              })
              state.expense = [...Object.values(state.expense),action.payload]
        },
        fetchData(state, action) {
            state.expense = action.payload
        },
        deleteExpense(state,action) {
            const key = Object.keys(state.expense).find(key => state.expense[key].id === action.payload)
            
        fetch(`https://react-expense-tracker-40f44-default-rtdb.firebaseio.com/expense${email}/${key}.json?print=pretty`,{
            method:'DELETE'
        })
        .then(res => {
            if(res.ok) {
                console.log("expenses deleted successfully")
                window.location.reload()
            }
        })

       
    },
    editExpense(state,action)  {

        const key = Object.keys(state.expense).find(key => state.expense[key].id === action.payload.id)
        console.log(key)
        fetch(`https://react-expense-tracker-40f44-default-rtdb.firebaseio.com/expense${email}/${key}.json?print=pretty`,{
            method:'PUT',
            body:JSON.stringify(action.payload),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => {
            if(res.ok) {
                console.log("expenses edited successfully");
                window.location.reload()
            }
        })
    }
    }
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;

