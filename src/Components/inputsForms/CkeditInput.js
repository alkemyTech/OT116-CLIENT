import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputLabel,
} from '@mui/material'
import '../FormStyles.css'

const ckeditInput = ({
  label,
  name,
  value,
  errorMessage,
  onChange,
  onBlur,
  isTouched,
}) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name} className='show-ckeditor-input__label'>
        {label}
      </FormLabel>
      <CKEditor
        editor={ClassicEditor}
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isTouched && !value && (
        <FormHelperText error>Este campo es Requerido</FormHelperText>
      )}
      {value && errorMessage && (
        <FormHelperText error>{errorMessage}</FormHelperText>
      )}
    </FormControl>
  )
}

export default ckeditInput
