import { useState} from 'react';
import { useParams } from 'react-router';
import {Formik, Form, Field} from 'formik';
import { setUrlImage } from '../common/File';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CustomErrorMessage } from '../common/CustomErrorMessage';
import {setCKEditorText} from '../common/ckEditor/setCKEditorText';
import {createOrUpdateTestimonial} from '../../Services/testimonialService';
import { validateForm} from '../common/validations/validateForm';
const TestimonialForm = () => {

  const {testimonialId} = useParams()
  const [testimonial, setTestimonial] = useState({
    name:'',
    description:'',
    image: ''
  });

  const handleChangeDescription = (description, setFieldValue) => {
    setFieldValue("description", description.getData())
  };

  const handleChangeImage = (e, setImage) =>{
    setUrlImage(e.target.files[0],setImage)
  };

  const handleSubmit = (values,resetForm) => {
    let updatedValues =setCKEditorText(values,'description')
    createOrUpdateTestimonial(testimonialId,updatedValues)
    resetForm();
  }

  const placeholder = "Write some testimonial description";
  return (
    <div className='form-container'>
      <Formik
        initialValues={{
          ...testimonial
        }}
        validate={(values)=>validateForm(values)}
        onSubmit={(values,{resetForm})=>handleSubmit(values,resetForm)}
      >
        {({errors, setFieldValue,values})=>(
          <Form className='form' >
            <div>
              <p>Testimonial Name</p>
              <Field
                label="Testimonial Name"
                className="input-field"
                type="text"
                id='name'
                name="name"
                placeholder="Testimonial Name"
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

export default TestimonialForm;
