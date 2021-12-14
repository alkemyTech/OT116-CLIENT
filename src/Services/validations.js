const emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const isEmailInvalid = (email) => {
  return !emailFormat.test(email)
}
export const isRequired = (values, errors) => {
  if (!values) {
    return (errors[values.name] = 'Este campo es requerido')
  }
}
export const isShort = (values, min) => {
  if (values !== '' && values.length < min) {
    return true
  } else {
    return false
  }
}
export const isBetween = (length, min, max) => {
  if (length < min || length > max) {
    return false
  } else {
    return true
  }
}
