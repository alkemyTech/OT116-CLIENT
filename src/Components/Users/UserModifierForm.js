import React from 'react';
import '../FormStyles.css';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { rolesList } from '../utilsData/roleList';
import { createUser, updateUser } from '../../app/usersReducer/usersAccion';

const UserModifierForm = ({user}) => {
    const dispatch = useDispatch()
    const hasUser = () => user ? true : false;

    const handleOnSubmit =  async (values) => {
        if(hasUser){
            dispatch(updateUser({id:user.id,user:values}))
        }else {
            dispatch(createUser(values))
        }
    };

    const validate = (values) => {
        const errors = {};

        const dataRequired = 'Dato obligatorio';

        const isNotValidField = (key) => {
            if(values[key]) return false;
            errors[key] = dataRequired;
            return true;
        };
        const isJPEG = (imageType) => imageType === "image/jpeg";
        const isPNG = (imageType) => imageType === "image/png";

        const isValidImageType= key => {
            const profilePhoto = values.profilePhoto[key];
            if (values.profilePhoto[key] === null) return dataRequired;
            return isJPEG(profilePhoto) || isPNG(profilePhoto);
        }
        const isEmailValid = email => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

        if (!isNotValidField('name') && values.name.length < 4) {
          errors.name = 'Debe tener 4 caracteres o mas';
        };

        if (!isNotValidField('email') && !isEmailValid(values.email)) {
          errors.email = 'Dirección de email inválida';
        };

        if(!values.roleId){
            errors.roleId = 'Elija un Rol'
        };

        if(!isNotValidField('password') && values.password.length < 8){
            errors.password= 'La contraseña debe tener al menos 8 caracteres';
        };
        if(!isNotValidField('profilePhoto') && !isValidImageType('type') ){
            errors.profilePhoto = 'Tipo de archivo no soportado, extensiones permitidas: jpg o png'
        }

        return errors;
    };

    const {values,touched,errors,handleSubmit,handleChange,handleBlur,setFieldValue} = useFormik({
        initialValues: {
            name: user?.name ?? '',
            password: user?.password ?? '',
            email: user?.email ?? '',
            roleId:user?.roleId ?? '',
            profilePhoto:user?.profilePhoto ?? {}
        },
        validate,
        enableReinitialize:true,
        onSubmit: values => handleOnSubmit(values)
    });

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {!hasUser ?<div><img alt="profilePhoto" src={values.profilePhoto}></img></div>
                :<div>
                    <label htmlFor="img">Seleccionar imagen: </label>
                    <input
                        type="file"
                        id="profilePhoto"
                        accept="image/jpeg"
                        onChange={e=>setFieldValue('profilePhoto',e?.target?.files ? e.target.files[0] : null)}
                        onBlur={handleBlur}
                    />
                    {touched.profilePhoto && errors.profilePhoto}
                </div>
            }
            <input
                className="input-field"
                type="text"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Nombre"
            />
            {touched.name && errors.name}
            <input
                className="input-field"
                type="text"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
            />
            {touched.email && errors.email}
            <input
                className="input-field"
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Contraseña"
            />
            {touched.password && errors.password}
            <select
                className="input-field"
                value={values.roleId}
                id="roleId"
                onChange={handleChange}
            >
                <option value="" disabled >Seleccione el rol</option>
                {
                    rolesList.map(role =>
                        <option key={role.roleId} value={role.roleId}>{role.roleId}</option>
                    )
                }
            </select>
            <button className="submit-btn" type="submit">{!hasUser ? 'Modificar' : 'Crear'}</button>
        </form>
    );
}

export default UserModifierForm;
