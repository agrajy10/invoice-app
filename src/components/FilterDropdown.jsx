import { useState } from 'react';
import styled from 'styled-components';

import CustomCheckbox from './CustomCheckbox';

import IconArrowDown from '../assets/icon-arrow-down.svg';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownButton = styled.button`
  display: block;
  width: 190px;
  border: none;
  background-color: transparent;
  font-family: Spartan, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.25px;
  cursor: pointer;
  &:after {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url(${IconArrowDown}) no-repeat center;
    transform-origin: center;
    transform: ${(props) => (props.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
    margin-left: 16px;
  }
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  background-color: #fff;
  width: 192px;
  padding: 24px;
  margin-top: 23px;
  z-index: 777;
  div:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const filterOptions = ['draft', 'pending', 'paid'];

function FilterDropdown() {
  const [isExpanded, setisExpanded] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(filterOptions.length).fill(false));

  const onClick = () => setisExpanded(!isExpanded);

  const onChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <Wrapper>
      <DropdownButton type="button" onClick={onClick} isExpanded={isExpanded}>
        Filter by status
      </DropdownButton>
      {isExpanded && (
        <DropdownWrapper>
          {filterOptions.map((filterOption, index) => {
            return (
              <CustomCheckbox
                key={index}
                id={filterOption}
                label={filterOption}
                value={filterOption}
                checked={checkedState[index]}
                onChange={() => onChange(index)}
              />
            );
          })}
        </DropdownWrapper>
      )}
    </Wrapper>
  );
}

export default FilterDropdown;
