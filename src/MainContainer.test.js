import React from 'react';
import { render } from '@testing-library/react'
import MainContainer from './MainContainer';

test('renders MainContainer', () => {
  const tree = render(<MainContainer />);
  expect(tree).toMatchSnapshot();
});
