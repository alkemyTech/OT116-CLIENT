export const formatDate = (date) => date.toLocaleDateString("en-GB");

export const URLFileFormater = (e, state, setState, inputName) => {
  const imageFile = e.target.files[0];
  const imageUrl = new FileReader();
  imageUrl.readAsDataURL(imageFile);
  imageUrl.onload = (e) => {
    setState({ ...state, [inputName]: e.target.result });
  };
};
export const CKEditorTextFormater = (e, state, setState, inputName) => {
  const textReset = e.target.value.replace(
    /'<p>'|['</p>']|<strong>|['</strong>']/gi,
    ""
  );
  setState({ ...state, [inputName]: textReset });
};
