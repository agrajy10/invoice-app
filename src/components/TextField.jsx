import { useField } from 'formik';
import styled from 'styled-components';

const InputLabel = styled.label`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  font-family: Spartan, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme, error }) =>
    error ? theme.textField.label.error.color : theme.textField.label.color};
  line-height: 1;
  margin-bottom: 10px;
  span {
    font-size: 10px;
    margin-left: auto;
  }
`;

const TextInput = styled.input`
  width: 100%;
  height: 48px;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme }) => theme.textField.bg};
  border-color: ${({ theme, error }) =>
    error ? theme.textField.error.borderColor : theme.textField.borderColor};
  border-radius: 4px;
  padding: 15px 20px;
  font-family: Spartan, sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.h1};
  letter-spacing: -0.25px;
  &:focus {
    outline: none;
    border-color: ${({ theme, error }) =>
      error ? theme.textField.error.borderColor : theme.textField.focus.borderColor};
  }
  &:placeholder {
    color: rgba(12, 14, 22, 0.4);
  }
`;

function TextField({ label, type = 'text', ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <InputLabel htmlFor={props.id} error={meta.touched && meta.error ? meta.error : ''}>
        {label}
        {meta.touched && meta.error ? <span>{meta.error}</span> : null}
      </InputLabel>
      <TextInput
        type={type}
        {...field}
        {...props}
        error={meta.touched && meta.error ? meta.error : ''}
      />
    </>
  );
}

export default TextField;
