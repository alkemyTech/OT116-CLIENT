import { useEffect, useState } from 'react';
import {useParams} from 'react-router'
import {Formik, Form, Field} from 'formik';
import { setUrlImage } from '../common/File';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CustomErrorMessage } from '../common/CustomErrorMessage';
import {setCKEditorText} from '../common/ckEditor/setCKEditorText';
import { validateForm} from '../common/validations/validateForm';
import * as activitiesReducer from '../../app/activitiesReducer/activitiesReducer';
import { useDispatch } from 'react-redux';
const ActivitiesForm = () => {
  const {activityId} = useParams();
  const [activity, setActivity] = useState({
    id: activityId,
    name:'',
    description:'',
    image: ''
  });
  const dispatch = useDispatch();
  const handleChangeDescription = (description, setFieldValue) => {
    setFieldValue("description", description.getData())
  };
  useEffect(() => {
    dispatch(activitiesReducer.getAll())
  })

  const handleChangeImage = (e, setImage) =>{
    setUrlImage(e.target.files[0],setImage)
  };

  const handleSubmit = (values,resetForm) => {
    let updatedValues =setCKEditorText(values,'description')
    dispatch(activitiesReducer.createOrUpdate(values));
    resetForm();
  }

  const placeholder = "Write some activity description";
  return (
    <div className='form-container'>
      <Formik
        initialValues={{
          ...activity
        }}
        validate={(values)=>validateForm(values)}
        onSubmit={(values,{resetForm})=>handleSubmit(values,resetForm)}
      >
        {({errors, setFieldValue,values})=>(
          <Form className='form' >
            <div>
              <p>Activity Name</p>
              <Field
                label="Activity Name"
                className="input-field"
                type="text"
                id='name'
                name="name"
                placeholder="Activity Name"
              />
              {errors.name && CustomErrorMessage ('title',errors.name)}
            </div>
            <div>
              <p>Description</p>
              <CKEditor
                  editor={ ClassicEditor }
                  data=''
                  config={ {
                     placeholder
                  } }
                  onChange={(event, description)=>handleChangeDescription (description,setFieldValue)}
              />
              {errors.description && CustomErrorMessage ('description',errors.description)}
            </div>
            <div >
              <p >Image</p>
              <div>
                {values.image && <img src={values.image} alt='imagen vista previa' width='180' height='180' />}
              </div>
              <div>
                <Field
                    className='input-image'
                    type='file'
                    accept="image/png, image/jpg"
                    id='image'
                    name='image'
                    value=''
                    onChange={(e)=>handleChangeImage(e,setFieldValue)}
                />
              </div>
              {errors.image && CustomErrorMessage ('image',errors.image)}
            </div>
            <button className="submit-btn" type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ActivitiesForm;
