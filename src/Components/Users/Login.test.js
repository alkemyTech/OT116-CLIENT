// validación de los campos del formulario utilizando Jest & React Testing, verificando que no permita hacer un submit si no se completó correctamente, y se muestren los mensajes de error en ese caso. Si los campos se completaron, se deberá testear la correcta petición HTTP al endpoint de login de Usuarios (POST /login), y los mensajes de error y éxito correspondientes en base al resultado de la petición.

import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

jest.mock('axios');

describe('Users login', () => {

  test('renders Login component', () => {
    render(<Provider store={store}><Login /></Provider>);

    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
  });

  test('all input is required', () => {
    render(<Provider store={store}><Login /></Provider>);

    const inputArray = screen.getAllByRole('textbox');
    inputArray.forEach((input) => expect(input).toBeRequired());
  });

  test.only('no empty input to submit', () => {
    const values = {
      email: '',
      password: '',
    };

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: values }));

    render(<Provider store={store}><Login /></Provider>);

    const inputArray = screen.getAllByRole('textbox');
    inputArray.forEach(async (input) => {
      expect(input).not.toHaveValue('');
      // expect(await userEvent.click(screen.getByRole('button'))).toBeCalledTimes(1)
    });
  });
});