import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as validations from "../../Services/validations";
import "../FormStyles.css";
import GenericInput from "../inputsForms/GenericInput";
import { createContact } from "../../Services/contactSerive";
import { getOrganizationInformation } from "../../Services/OrganizationInformation";
import Map from "../Map/Map";

const validate = (values) => {
  const errors = {};
  const inValidEmail = validations.isEmailInvalid(values.email);
  const phoneInvalid = validations.isShort(values.phone, 8);
  if (inValidEmail) {
    errors.email = "Email invalido";
  }
  if (phoneInvalid) {
    errors.phone = "Numero de teléfono invalido";
  }
  return errors;
};

const ContactForm = () => {
  const [coordinates, setCoordinates] = useState([]);
  const inputValues = [
    { type: "text", english: "name", spanish: "Nombre" },
    { type: "email", english: "email", spanish: "Email" },
    { type: "number", english: "phone", spanish: "Teléfono" },
    { type: "text", english: "message", spanish: "Mensaje" },
  ];

  const formInitialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    validate,
    onSubmit: (values) => createContact(values),
  });

  useEffect(() => {
    getOrganizationInformation().then((response) => {
      setCoordinates(JSON.parse(response.data.address));
    });
  }, []);
  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      {inputValues.map((inputValues) => (
        <GenericInput
          name={inputValues.english}
          label={inputValues.english}
          type={inputValues.type}
          placeholder={`Ingrese su ${inputValues.spanish}`}
          value={formik.values[inputValues.english]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors[inputValues.english]}
          isTouched={formik.touched[inputValues.english]}
        />
      ))}
      <Map coordinates={coordinates} />
      <button className="submit-btn" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
