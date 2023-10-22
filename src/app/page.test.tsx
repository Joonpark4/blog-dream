import { render, screen } from '@testing-library/react';
import Home from './page';

test('checking the text', () => {
  render(<Home />);
  const textElement = screen.getByText('아 배고파요');
  expect(textElement).toBeInTheDocument();
});