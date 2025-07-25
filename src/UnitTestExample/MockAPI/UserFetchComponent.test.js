import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserFetchComponent from './UserFetchComponent';

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ name: 'ankur' }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

test('displays fetched user name', async () => {
  render(<UserFetchComponent />);

    
    await waitFor(() => {
        expect(screen.getByText(/ankur/i)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
});
