import { FormHelperText } from '@mui/material'
import '../FormStyles.css'

const FileInput = ({
  name,
  value,
  type,
  accept,
  errorMessage,
  onChange,
  onBlur,
  isTouched,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        accept={accept}
      />
      {isTouched && !value && (
        <FormHelperText error>Este campo es Requerido</FormHelperText>
      )}
      {value && errorMessage && (
        <FormHelperText error>{errorMessage}</FormHelperText>
      )}
    </div>
  )
}

export default FileInput
