import { Button, InputLabel, FormHelperText } from "@mui/material";
import { isFile } from "../../Utils/validation";
import "../../Styles/inputs.css";
import "../FormStyles.css";

const FileInput = ({
  btnText,
  name,
  value,
  color,
  accept,
  errorMessage,
  className,
  ...events
}) => {
  return (
    <div className={`show-file-input ${className || ""}`}>
      <input
        type="file"
        name={name}
        id={name}
        {...events}
        accept={accept}
        className="hide"
      />
      <label htmlFor={name}>
        <Button
          variant="contained"
          className="submit-btn"
          color={color}
          component="span"
        >
          {btnText}
        </Button>
      </label>
      {isFile(value) && (
        <InputLabel className="show-file-input__file-name">
          Archivo subido: {value.name}
        </InputLabel>
      )}
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </div>
  );
};

export { FileInput };
