/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../app/authReducer/authActions';

const schema = Yup.object().shape({
  email: Yup.string().email('El correo electrónico es inválido').required('Este campo es obligatorio'),
  password: Yup.string().required('Este campo es obligatorio'),
});

const Login = () => {
  const dispatch = useDispatch();

  const {
    error, isAuthenticated,
  } = useSelector((state) => state.auth);

  const { push } = useHistory();

  useEffect(() => {
    if (isAuthenticated) push('/');
  }, [isAuthenticated]);

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <Formik
        validationSchema={schema}
        validateOnBlur
        onSubmit={(data) => {
          dispatch(login(data));
        }}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
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
                onBlur={handleBlur}
                isInvalid={touched.email && errors.email}
                defaultValue="ejemplo@ejemplo.com"
                helperText="Ingresa tu correo electrónico"
              />
              <div type="invalid">{errors.email}</div>
              <TextField
                id="outlined-password-input"
                label="*******"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && errors.password}
                autoComplete="current-password"
                helperText="Ingresa tu contraseña"
              />
              <div type="invalid">{errors.password}</div>
            </div>
            <Button type="submit" variant="contained" onClick={handleSubmit}>LogIn</Button>
          </Box>
        )}
      </Formik>
      {
        error && <p>{error}</p>
      }

    </div>

  );
};

export default Login;
