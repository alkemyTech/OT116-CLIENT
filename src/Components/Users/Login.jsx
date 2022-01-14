/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../app/authReducer/authActions';
import { logout } from '../../app/authReducer/authReducer';

const Login = () => {
  const dispatch = useDispatch();
  const {
    status, error, isAuthenticated, user,
  } = useSelector((state) => state.auth);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    return setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(values));
  };
  return (
    <div>
      { !isAuthenticated
        ? (
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                defaultValue="ejemplo@ejemplo.com"
                helperText="Ingresa tu correo electrónico"
              />
              <TextField
                id="outlined-password-input"
                label="*******"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                autoComplete="current-password"
                helperText="Ingresa tu contraseña"
              />
            </div>
            <Button type="submit" variant="contained" onClick={handleSubmit}>LogIn</Button>
          </Box>
        )
        : (
          <div>
            <h3>Usuario Logueado</h3>
            <p>
              Estado:
              {' '}
              {status}
            </p>
            <p>{user.name}</p>
            <Button type="button" variant="contained" onClick={() => dispatch(logout())}>LogOut</Button>
          </div>
        )}
      {
        error && <p>{error}</p>
      }

    </div>

  );
};

export default Login;
