import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

test('renders BoxList snapshot correctly', () => {
  const { container } = render(<BoxList />);
  expect(container).toMatchSnapshot();
});
