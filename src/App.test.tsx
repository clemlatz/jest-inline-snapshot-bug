import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('matches snapshot', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchInlineSnapshot();
});
