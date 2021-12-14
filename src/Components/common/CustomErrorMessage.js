import {ErrorMessage} from 'formik';

export const CustomErrorMessage = (name,errors) =>{
  return (
    <ErrorMessage
      name={name}
      component={()=><p>{errors}</p>}
    />
  )
};
