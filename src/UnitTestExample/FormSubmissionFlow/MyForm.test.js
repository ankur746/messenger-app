import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyForm from './MyForm';

test('form submits entered value', () => {
    const handleSubmit = jest.fn();
    render(<MyForm onSubmit={handleSubmit} />);
  
    const input = screen.getByPlaceholderText(/enter name/i);
    fireEvent.change(input, { target: { value: 'Ankur' } });    

    const button = screen.getByText(/submit/i);
    fireEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith('Ankur');

    
});
