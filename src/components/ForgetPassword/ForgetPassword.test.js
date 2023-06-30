import ForgetPassword from "./ForgetPassword";

import { render,screen } from "@testing-library/react";

describe('ForgetPass',()=> {
    test('renders a forget page', () => {
        render(<ForgetPassword />)
        const labelElement = screen.getByLabelText('Email',{selector: 'input'});
    
    })
})