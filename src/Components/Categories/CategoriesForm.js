import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as services from '../../Services/categoriesServices'
import * as inputServices from '../../Services/inputsServices'
import * as validations from '../../Services/validations'
import GenericInput from '../inputsForms/GenericInput'
import CkeditInput from '../inputsForms/CkeditInput'
import FileInput from '../inputsForms/FileInput'
import '../FormStyles.css'

const validate = (values) => {
  const errors = {}
  const titleIsShort = validations.isShort(values.name, 4)
  if (titleIsShort) {
    errors.name = 'El Titulo debe ser mas largo'
  }
  return errors
}

const CategoriesForm = (props) => {
  const { idforEdit } = props
  const [isLoading, setisLoading] = useState(true)
  const [category, setcategory] = useState({
    name: '',
    description: '',
    image: '',
  })

  const showDataforEdit = async (idforEdit) => {
    await services.getCategories(idforEdit).then((result) => {
      if (result) {
        setcategory({
          ...category,
          name: result.name,
          description: result.description,
          image: result.image,
        })
        setisLoading(false)
      } else {
        setisLoading(true)
      }
    })
  }

  useEffect(() => {
    if (idforEdit) showDataforEdit(idforEdit)
    else setisLoading(false)
  }, [idforEdit])

  useEffect(() => {
    if (category) formik.setValues(category)
  }, [category])

  const formik = useFormik({
    initialValues: category,
    validate,
    onSubmit: (values) => {
      services.createOrUpdate(idforEdit, values)
    },
  })

  return (
    <>
      {isLoading ? (
        <p>loading..</p>
      ) : (
        <form className='form-container' onSubmit={formik.handleSubmit}>
          <GenericInput
            name='name'
            label='Nombre de la Categoria'
            type='text'
            placeholder='Ingrese el nombre de la Categoria'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.name}
            isTouched={formik.touched.name}
          />

          <CkeditInput
            name='description'
            label='Descripción'
            value={formik.values.description}
            onChange={(e, editor) =>
              inputServices.handleCKEditorChange(formik, editor, 'description')
            }
            errorMessage={formik.errors.description}
            isTouched={formik.touched.description}
          />

          <FileInput
            name='image'
            type='file'
            accept='image/png, image/jpg'
            value={formik.values.image}
            onChange={(e) => inputServices.handleFileChange(formik, 'image', e)}
            errorMessage={formik.errors.image}
            isTouched={formik.touched.image}
          />

          <button className='submit-btn' type='submit'>
            Guardar cambios
          </button>
        </form>
      )}
    </>
  )
}
export default CategoriesForm
