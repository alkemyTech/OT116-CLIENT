import React, { useState } from 'react';
import '../FormStyles.css';
import { useFormik } from 'formik';

const CustomRegisterForm = () => {
    const [initialValues, setInitialValues] = useState({
        email: '',
        password: ''
    });

    const validate = values => {
        const errors = {};

        const includesLetter = string => {
            const letters = /[A-Za-z]/;
            return !!letters.test(string)
        }

        const includesSymbols = string => {
            const symbols= /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
            return !!symbols.test(string);
        }

        const includesNumbers= string => {
            const numbers = /[0-9]/;
            return !!numbers.test(string);
        }
        const errorRequired = (key) => {
            if(!values[key]){
                errors[key] = 'Dato Obligatorio'
                return true
            }
            return false
        };
        const isEmailValid = email => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

        const isPaswordValid = password => {
            password.length >= 6 && includesLetter(password) && includesSymbols(password) && includesNumbers(password)
        }

        if (!errorRequired('email') && isEmailValid(values.email) ) {
            errors.email = 'Email inválido';
        }
        if (!errorRequired('password') && !isPaswordValid(values.password)) {
           errors.password = 'La contraseña debe ser de al menos 6 caracteres, tambien debe incluir al menos una letra y un símbolo(@#$%)';
        }

        if (!errorRequired('repeatedPassword') && values.repeatedPassword !== values.password) {
            errors.repeatedPassword = `Las contraseñas no coinciden`;
        }
        return errors;
    };


    const {touched,errors,values,handleChange,handleSubmit,handleBlur} = useFormik({

        initialValues: {
          email: '',
          password: '',
          repeatedPassword: '',
        },
        validate,
        onSubmit: values => {
            setInitialValues({...initialValues,email:values.email,password:values.password})
            localStorage.setItem('token','tokenValueExample')
        }
    });
    return (
        <form
            className="form-container"
            onSubmit={handleSubmit}
        >
            <input
                className="input-field"
                type="text"
                id="email"
                placeholder="Ingrese email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {touched.email && errors.email }
            <input
                className="input-field"
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Contraseña"
            />
            {touched.password  && errors.password }
            <input
                className="input-field"
                type="password"
                id="repeatedPassword"
                value={values.repeatedPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirmar contraseña"
            />
            {touched.repeatedPassword && errors.repeatedPassword}
            <button id="registerButton" className="submit-btn" type="submit">Registrarse</button>
        </form>
    );
}

export default CustomRegisterForm;
