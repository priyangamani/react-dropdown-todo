import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import AddForm from './AddForm';

test('renders addForm', () => {
  const tree = render(<AddForm />);
  fireEvent.click(screen.getByText('Add & Select'))
  expect(tree).toMatchSnapshot();
});
