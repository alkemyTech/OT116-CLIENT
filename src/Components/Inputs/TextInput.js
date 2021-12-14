import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import '../../Styles/inputs.css';

const TextInput = ({name, label, type, placeholder, value, errorMessage, className, ...inputEvents}) => {
    return (
        <FormControl className={className}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Input type={type} name={name} value={value} placeholder={placeholder} {...inputEvents}/>
            {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
        </FormControl>
    )
}

export { TextInput };
