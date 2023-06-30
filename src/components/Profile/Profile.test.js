import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe('Profile', () => {
    test('renders a Profile page', () => {
        render(<Profile />)
        const labelElement = screen.getByLabelText('Full Name',{selector: 'input'});
    
    })
    test('renders a Profile page', () => {
        render(<Profile />)
        const labelElement = screen.getByLabelText('Photo URL',{selector: 'input'});
    
    })

})
