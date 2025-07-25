import { fireEvent, render, screen } from "@testing-library/react"
import MyButton from "./MyButton"


test('MyButton render', async () => {
    render(<MyButton />)
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    const counter = screen.getByTestId('counter');

    expect(counter).toHaveTextContent("0");
    
    fireEvent.click(button);
    expect(counter).toHaveTextContent("1");
});
