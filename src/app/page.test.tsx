import { render, screen } from '@testing-library/react';
import Home from './page';

test('renders 안녕하세요', () => {
  render(<Home />);
  const textElement = screen.getByText('안녕하세요');
  expect(textElement).toBeInTheDocument();
});