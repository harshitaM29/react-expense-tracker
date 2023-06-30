import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

test('renders a Profile page', () => {
    render(<Profile />)
    const labelElement = screen.getAllByLabelText('Full Name');
    // expect(labelElement).toBeInTheDocument();
})