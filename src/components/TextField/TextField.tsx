import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const StyleInput = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    color: '#625f6e',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#c2cdd4',
    borderWidth: 1,
  },
  '& .MuiFormLabel-root, .MuiFormLabel-root .Mui-focused': {
    textTransform: 'capitalize',
    color: '#26a69a',
  },
  '& .MuiFormLabel-root .MuiInputLabel-asterisk': {
    color: '#f44336',
  },

  '& .MuiFormLabel-root.MuiInputLabel-shrink': {
    background: 'inherit',
    color: '#26a69a',
  },
}));
interface InputFieldProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  multiline?: boolean;
  rows?: string | number;
}

function InputField(props: InputFieldProps) {
  const { label, ...rest } = props;
  return (
    <StyleInput
      id="outlined-basic"
      fullWidth
      label={label}
      variant="outlined"
      className="rounded-1-2"
      size="small"
      {...rest}
    />
  );
}
export default InputField;
