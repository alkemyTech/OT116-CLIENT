// validación de los campos del formulario utilizando Jest & React Testing, verificando que no permita hacer un submit si no se completó correctamente, y se muestren los mensajes de error en ese caso. Si los campos se completaron, se deberá testear la correcta petición HTTP al endpoint de login de Usuarios (POST /login), y los mensajes de error y éxito correspondientes en base al resultado de la petición.

import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
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

const onSubmit = jest.fn();

describe('Users login', () => {

  beforeEach(() => {
    const component = render(<Provider store={store}><Login /></Provider>);
  })

  afterEach(() => cleanup());

  test('renders Login component', () => {
    // expect to render the Login component 
    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
  });

  test('all input is required', () => {
    // expect to all inputs have a required attribute
    const inputArray = screen.getAllByRole('textbox');
    inputArray.forEach((input) => expect(input).toBeRequired());
  });

  test("shouldn't submit if inputs are empty", () => {
    // expect to email and password inputs have empty values
    const emailInput = screen.getByPlaceholderText('emailInput');
    expect(emailInput.value).toBeFalsy();

    const passwordInput = screen.getByPlaceholderText('passwordInput');
    expect(passwordInput.value).toBeFalsy();

    //expect to submit button don't call api
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  test("shouldn't submit if email input is empty", () => {
    // expect to email input has empty value
    const emailInput = screen.getByPlaceholderText('emailInput');
    expect(emailInput.value).toBeFalsy();
    // expect to password input has a no empty value
    const passwordInput = screen.getByPlaceholderText('passwordInput');
    passwordInput.value = '123456';
    expect(passwordInput.value).toBeTruthy();
    // expect to submit button don't call login function
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledTimes(0);
  })

  test('show error message if email input is empty', async () => {
    //expect to email input is empty
    const emailInput = screen.getByPlaceholderText('emailInput');
    fireEvent.change(emailInput, {target: {value: ''}});
    expect(emailInput.value).toBe('');

    // expect to error message was showed after user begins to insert password
    const passwordInput = screen.getByPlaceholderText('passwordInput');
    fireEvent.change(passwordInput, {target: {value: '1234'}});
    expect(passwordInput.value).not.toBe('');
    await waitFor(() => {
      const errorMessage = screen.queryByText('Este campo es obligatorio');
      expect(errorMessage).toBeInTheDocument();
    })
  })
});