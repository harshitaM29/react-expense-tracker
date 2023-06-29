import {createSlice} from '@reduxjs/toolkit';




const initialExpenseState = {expense: [], totalAmount: 0, changed:false}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState:initialExpenseState,
    reducers: {
        replaceExpense(state,action) {
            state.expense = action.payload.expense;
          
        },
        addExpenses(state,action) {
            state.changed = true;
           state.expense.push({
            ...action.payload
           })
          
        },
        deleteExpense(state,action) {
            state.changed = true;
                state.expense = state.expense.filter(item => item.id !== action.payload)
       
    },
    editExpense(state,action)  {
        const index =  state.expense.findIndex(item => item.id === action.payload.id)
        state.changed = true;
        state.expense[index].title = action.payload.title;
        state.expense[index].des = action.payload.des;
        state.expense[index].amount = action.payload.amount;
        
    }
    }
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;

