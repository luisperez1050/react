import React from 'react';
import { render } from '@testing-library/react';
import CardGame from './CardGame';

test('renders learn react link', () => {
  const { getByText } = render(<CardGame />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
