import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../app/store';
import Login from './Login';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe('Users login', () => {

  test('renders Login component', () => {
    render(<Provider store={store}><Login /></Provider>);

    screen.debug();
    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
  });
});