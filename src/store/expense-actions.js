import { expenseActions } from './expense';

const email = localStorage.getItem("email")

export const fetchExpenseData = () => {
    return async(dispatch) => {
        const fetchData = async() => {
            const response = await fetch(`https://react-expense-tracker-40f44-default-rtdb.firebaseio.com/expense${email}.json`);
            if(!response.ok) {
                throw new Error('Could not fetch data')
            };
            const data = await response.json();
            return data;
        }

            try {
             const expenseData = await fetchData();
            
             dispatch(expenseActions.replaceExpense({
                expense: expenseData.expense || [],
                totalAmount:expenseData.totalAmount
             }))
            } catch (error) {
                console.log(error)
            
        };
    };
}

export const sendExpenseItems = (expense) => {
   
    return async() => {
       
            const response = await fetch(`https://react-expense-tracker-40f44-default-rtdb.firebaseio.com/expense${email}.json`,{
                method: 'PUT',
                body:JSON.stringify({
                    expense:expense.expense,
                    totalAmount:expense.totalAmount,
                })
            })
            if(!response.ok) {
                throw new Error('Request failed');
            }
        
    }
}