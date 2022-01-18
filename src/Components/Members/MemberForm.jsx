import React, { useState } from 'react';
import './MemberForm.css';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import * as membersService from '../../Services/membersService';

const MemberForm = ({ member = null }) => {
  const [message, setMessage] = useState('');
  const isEditing = !!member;
  const [imageString, setImageString] = useState('');
  const [imageUrl, setImageUrl] = useState(() => member?.image || '');
  const initialValues = {
    name: member?.name || '',
    image: member?.image || '',
    description: member?.description || '',
    linkedin: member?.linkedin || '',
  };
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4, 'El nombre debe tener al menos 4 caracteres')
      .required('Tienes que proporcionar un nombre.'),
    description: yup.string().required('Tienes que proporcionar una descripción.'),
    linkedin: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Por favor, proporcione un sitio web válido.',
      )
      .required('Por favor, proporcione un sitio web de linkedin para sus redes sociales.'),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={async (values) => {
        let { image, ...userData } = values;
        userData = {
          ...userData,
          image: imageString,
        };
        if (isEditing) {
          try {
            await membersService.modifyMember(member.id, userData);
            setMessage('Miembro editado correctamente');
            setTimeout(() => {
              setMessage('');
            }, 4000);
          } catch (error) {
            setMessage('Ha habido un error.');
            setTimeout(() => {
              setMessage('');
            }, 4000);
          }
        } else {
          try {
            const res = await membersService.createMember(userData);
            if (res.data.success) {
              setMessage('Miembro creado correctamente');
              setTimeout(() => {
                setMessage('');
              }, 4000);
            } else {
              throw new Error();
            }
          } catch (error) {
            setMessage('Ha habido un error.');
            setTimeout(() => {
              setMessage('');
            }, 4000);
          }
        }
      }}
    >
      {({
        touched, errors, handleChange,
      }) => (
        <div>
          <h3 className="p-4 text-center">Registro de miembros</h3>
          <Form className="form-container">
            <Field
              className={`form-control mb-4 shadow-none ${
                touched.name && errors.name && 'is-invalid'
              }`}
              type="text"
              name="name"
              placeholder="Name"
            />
            {touched.name && errors.name && (
            <p className="text-danger">{errors.name}</p>
            )}
            <Field
              className={`form-control mb-4 shadow-none ${
                touched.image && errors.image && 'is-invalid'
              }`}
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              onChange={(e) => {
                handleChange(e);
                touched.image = true;
                const file = e.target.files[0];
                if (file) {
                  setImageUrl(URL.createObjectURL(file));
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImageString(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            {touched.image && errors.image && (
            <p className="text-danger">{errors.image}</p>
            )}
            {imageUrl && !errors.image ? (
              <img
                src={imageUrl}
                alt="member-image"
                className="rounded-fluid"
              />
            ) : null}
            <Field
              className={`form-control mb-4 shadow-none ${
                touched.linkedin && errors.linkedin && 'is-invalid'
              }`}
              type="text"
              name="linkedin"
              placeholder="Linkedin profile"
            />
            {touched.linkedin && errors.linkedin && (
            <p className="text-danger">{errors.linkedin}</p>
            )}
            <button className="submit-btn" type="submit">
              send
            </button>
            {message && (
            <div className="text-danger text-center">{message}</div>
            )}
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default MemberForm;
