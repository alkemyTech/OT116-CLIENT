import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormHelperText, FormLabel, InputLabel } from '@mui/material';
import '../../Styles/inputs.css';

const TextEditor = ({label, errorMessage, name, value, className, ...events}) => {
    return (
        <FormControl className={`show-ckeditor-input ${className || ''}`}>
            <FormLabel htmlFor={name} className='show-ckeditor-input__label'>{label}</FormLabel>
            <CKEditor
                editor={ClassicEditor}
                type="text"
                name={name}
                value={value}
                {...events}
            />
            {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
        </FormControl>
    )
}

export { TextEditor };
