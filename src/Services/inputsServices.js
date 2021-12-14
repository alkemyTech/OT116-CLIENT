export const handleCKEditorChange = (formik, editor, key) => {
  const data = editor.getData()
  const setDatafromCkeditor = data.replace(/'<p>'|['</p>']/gi, '')
  formik.setFieldValue(key, setDatafromCkeditor)
}

export const handleFileChange = (formik, name, e) => {
  const file = e.target.files[0]
  const fileUrl = new FileReader()
  fileUrl.readAsDataURL(file)
  fileUrl.onload = (e) => {
    formik.setFieldValue(name, e.target.result)
  }
}
