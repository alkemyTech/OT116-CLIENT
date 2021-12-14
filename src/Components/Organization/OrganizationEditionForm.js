import { TextInput } from "../Inputs/TextInput";
import { FileInput } from "../Inputs/FileInput";
import { TextEditor } from "../Inputs/TextEditor";
import { Button } from "@mui/material";
import {
  validateRequiredValues,
  regExp,
  validValue,
  isValidFile,
} from "../../Utils/validation";
import {
  showError,
  handleCKEditorChange,
  changeTouchedState,
  handleFileChange,
} from "../../Utils/handlers";
import { useFormik } from "formik";
import "../FormStyles.css";
import TitleBackoffice from "../Backoffice/TitleBackoffice";
const validateOrganizationForm = (values) => {
  const errors = {};
  const { facebook, instagram, ...requiredValues } = values;
  const acceptTypes = ["image/png", "image/jpg"];
  const notValidUrlFacebook =
    facebook.length > 0 && !validValue(regExp.url, facebook);
  const notValidUrlInstagram =
    instagram.length > 0 && !validValue(regExp.url, instagram);
  const notValidImage = !isValidFile(acceptTypes, values.logo);

  validateRequiredValues(values, errors, requiredValues);
  if (notValidImage) errors.logo = "Solo se aceptan formatos .png y .jpg";
  if (notValidUrlFacebook) errors.facebook = "Debe ser una url válida";
  if (notValidUrlInstagram) errors.instagram = "Debe ser una url válida";

  return errors;
};

const OrganizationEditionForm = () => {
  const organization = {
    organizationName: "",
    shortDescription: "",
    logo: "",
    longDescription: "",
    facebook: "",
    instagram: "",
  };

  const formik = useFormik({
    initialValues: organization,
    validate: validateOrganizationForm,
    onSubmit: (values) => {},
  });

  return (
    <>
      <TitleBackoffice title="Formulario de Organización" />
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <TextInput
          name="organizationName"
          label="Nombre"
          type="text"
          placeholder="Ingrese el nombre de la organización"
          value={formik.values.organizationName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={showError(formik, "organizationName")}
        />
        <TextEditor
          name="shortDescription"
          label="Descripción larga"
          value={formik.values.shortDescription}
          onChange={(e, editor) =>
            handleCKEditorChange(formik, editor, "shortDescription")
          }
          onBlur={() => changeTouchedState(formik, "shortDescription")}
          errorMessage={showError(formik, "shortDescription")}
        />
        <FileInput
          btnText="Subir logo"
          name="logo"
          color="buttoncreatenews"
          accept="image/png, image/jpg"
          value={formik.values.logo}
          onChange={(e) => handleFileChange(formik, e.target.files, "logo")}
          errorMessage={showError(formik, "logo")}
        />
        <TextInput
          name="longDescription"
          label="Descripcion corta"
          type="text"
          value={formik.values.longDescription}
          onChange={formik.handleChange}
          placeholder="Escriba la descripción larga"
          onBlur={formik.handleBlur}
          errorMessage={showError(formik, "longDescription")}
        />
        <TextInput
          name="facebook"
          label="Facebook"
          type="text"
          value={formik.values.facebook}
          onChange={formik.handleChange}
          placeholder="Ingrese la url"
          onBlur={formik.handleBlur}
          errorMessage={showError(formik, "facebook")}
        />
        <TextInput
          name="instagram"
          label="Instagram"
          type="text"
          value={formik.values.instagram}
          onChange={formik.handleChange}
          placeholder="Ingrese la url"
          onBlur={formik.handleBlur}
          errorMessage={showError(formik, "instagram")}
        />
        <Button
          variant="contained"
          color="buttoncreatenews"
          className="submit-btn"
          type="submit"
        >
          Guardar cambios
        </Button>
      </form>
    </>
  );
};

export default OrganizationEditionForm;
