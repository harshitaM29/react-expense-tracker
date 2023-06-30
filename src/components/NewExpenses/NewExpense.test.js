import { getByText, queryByText, render, screen } from "@testing-library/react";
import NewExpenses from "./NewExpenses";
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import ExpenseForm from "./ExpenseForm";

describe('NewExpense', () => {
    test('renders Add New Expense',() => {
       render(<NewExpenses />)
       const buttonElement = screen.getByRole('button', {name:"Add New Expense"});
       userEvent.click(buttonElement);

       const outputElement = render(<ExpenseForm />)
    
    })
    test('does not render Add New Expense',() => {
        render(<NewExpenses />)
        const buttonElement = screen.getByRole('button', {name:"Add New Expense"});
        userEvent.click(buttonElement);
 
        const outputElement =  screen.getByRole('button', {name:"Add New Expense"})

     })
})