
import { useParams } from 'react-router';
import {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import { setUrlImage } from '../common/File';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CustomErrorMessage } from '../common/CustomErrorMessage';
import {setCKEditorText} from '../common/ckEditor/setCKEditorText';
import {getProject, createOrUpdateProject} from '../../Services/projectService';
import { validateProjectsForm} from '../common/validations/validateProjectsForm';
const ProjectsForm = () => {
  const {projectId} = useParams()
  var minDateForm = new Date().toISOString().split('T')[0];

  const [project, setProject] = useState({
    title:'',
    description:'',
    image:'',
    due_date:''
  });

  useEffect(() => {
    if(projectId) {
      setProject(getProject(projectId))
    };
  }, [projectId]);

  const handleChangeDescription = (description, setFieldValue) => {
    setFieldValue("description", description.getData())
  };

  const handleChangeImage = (e, setImage) =>{
    setUrlImage(e.target.files[0],setImage)
  };

  const handleSubmit = (values,resetForm) => {
    let updatedValues =setCKEditorText(values,'description')
    createOrUpdateProject(projectId,updatedValues)
    resetForm();
  }

  const placeholder="Write some activity description";

    return (
      <div className='form-container'>
        <Formik
          initialValues={{
              ...project
          }}
          validate={(values)=>validateProjectsForm(values)}
          onSubmit={(values, {resetForm})=>handleSubmit(values,resetForm)}
        >
          {({errors, setFieldValue, values})=>(
            <Form className='form' >
              <div >
                <p>Project Title</p>
                <Field
                  className="input-field"
                  type="text"
                  id='title'
                  name="title"
                  placeholder="Activity Title"
                />
                {errors.title && CustomErrorMessage ('title',errors.title)}
              </div>
                <div>
                  <p>Date</p>
                  <Field
                    className='input-field'
                    type='date'
                    min={minDateForm}
                    name='due_date'
                    id='due_date'
                  />
                </div>
                <div >
                  <p >Description</p>
                  <CKEditor
                    className='input-field'
                    editor={ ClassicEditor }
                    data=''
                    config={ {
                       placeholder
                    } }
                    onChange={(event, description)=>handleChangeDescription(description,setFieldValue)}
                  />
                  {errors.description && CustomErrorMessage ('description',errors.description)}
                </div>
                <div>
                    <p>Image</p>
                    <div>
                        {values.image && <img src={values.image} alt='imagen vista previa' width='180' height='180' />}
                      </div>
                    <div>
                      <Field
                          type='file'
                          accept="image/png, image/jpg"
                          id='image'
                          name='image'
                          value=''
                          onChange={(e)=>handleChangeImage(e, setFieldValue)}
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

export default ProjectsForm;

