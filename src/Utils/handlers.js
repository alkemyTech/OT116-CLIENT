import { URLFileFormater, CKEditorTextFormater } from "./formatters";

const showError = (formik, value) =>
  formik.touched[value] && formik.errors[value];

const handleFileChange = (formik, files, key) => {
  formik.setFieldValue(key, files[0]);
};
const changeTouchedState = (formik, key) => {
  const touchedState = { ...formik.touched };
  touchedState[key] = true;
  formik.setTouched(touchedState);
};

const handleCKEditorChange = (formik, editor, key) => {
  const data = editor.getData();
  formik.setFieldValue(key, data);
};

const handleCKeditorForm = (editor, key, fn, state) => {
  const data = editor.getData();
  fn({ ...state, [key]: data });
};

const deleteActivity = (id, state) => {
  const newData = state?.filter((item) => item.id !== id);
  return newData;
};

export const handleNewsImputChange = (
  e,
  state,
  setState,
  setState2,
  state3,
  case1,
  case2,
  case3,
  case4
) => {
  switch (e.target.name) {
    case case1:
      setState({ ...state, [case1]: e.target.value });
      break;
    case case2:
      CKEditorTextFormater(e, state, setState, [case2]);
      break;
    case case3:
      URLFileFormater(e, state, setState, [case3]);
      break;
    case case4:
      const newCategorySelected = state3.find(
        (element) => e.target.value === element.name
      );
      setState({
        ...state,
        [case4]: newCategorySelected?.id,
      });
      setState2(newCategorySelected.name);
      break;
  }
};
export {
  showError,
  handleCKEditorChange,
  handleFileChange,
  changeTouchedState,
  handleCKeditorForm,
  deleteActivity,
};
