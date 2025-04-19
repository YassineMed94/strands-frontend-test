import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

test('renders chart title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const title = screen.getByText(/Top 10 Dog Breeds by Image Count/i);
  expect(title).toBeInTheDocument();
});
