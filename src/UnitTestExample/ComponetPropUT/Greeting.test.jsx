import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test('Check Component Props test', () => {
    render(<Greeting name="Ajay" />)
    expect(screen.getByText('Hello, Ajay!')).toBeInTheDocument();
 })