import styled from 'styled-components';

import IconCheck from '../assets/icon-check.svg';

const CustomRadioLabel = styled.label`
  display: block;
  position: relative;
  input[type='radio'] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    &:checked + span::before {
      background: ${({ theme }) => theme.customRadio.checked.bg} url(${IconCheck}) no-repeat 40% 40%;
    }
    &:focus + span::before {
      border-color: ${({ theme }) => theme.customRadio.hover.borderColor};
    }
  }
  span {
    padding-left: 1.8125rem;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.25px;
    text-transform: capitalize;
    &:before {
      content: '';
      box-sizing: border-box;
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 1px solid ${({ theme }) => theme.customRadio.borderColor};
      background-color: ${({ theme }) => theme.customRadio.bg};
      border-radius: 0.125rem;
      position: absolute;
      top: -2px;
      left: 0;
    }
    &:hover:before {
      border-color: ${({ theme }) => theme.customRadio.hover.borderColor};
    }
  }
`;

function CustomRadio({ id, label, onChange, ...rest }) {
  return (
    <CustomRadioLabel htmlFor={id}>
      <input type="radio" id={id} onChange={onChange} {...rest} />
      <span>{label}</span>
    </CustomRadioLabel>
  );
}

export default CustomRadio;
