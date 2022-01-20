import styled from 'styled-components';

import IconCheck from '../assets/icon-check.svg';

const Wrapper = styled.div`
  position: relative;
  input[type='checkbox'] {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    &:checked + span::before {
      background: #7c5dfa url(${IconCheck}) no-repeat 40% 40%;
    }
  }
`;

const CustomCheckboxLabel = styled.label`
  position: relative;
  span {
    padding-left: 29px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.25px;
    text-transform: capitalize;
    &:before {
      content: '';
      box-sizing: border-box;
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 1px solid #dfe3fa;
      background-color: #dfe3fa;
      border-radius: 2px;
      position: absolute;
      top: -2px;
      left: 0;
    }
    &:hover:before {
      border-color: #7c5dfa;
    }
  }
`;

function CustomCheckbox({ id, label, onChange, value, checked }) {
  return (
    <Wrapper>
      <CustomCheckboxLabel htmlFor={id}>
        <input
          type="checkbox"
          name={id}
          id={id}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span>{label}</span>
      </CustomCheckboxLabel>
    </Wrapper>
  );
}

export default CustomCheckbox;
