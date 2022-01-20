import { useContext, useState } from 'react';
import styled from 'styled-components';

import CustomRadio from './CustomRadio';

import { AppContext } from '../context/AppContext';

import { FILTER_INVOICES } from '../actions';

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

function FilterDropdown() {
  const { filter, dispatch } = useContext(AppContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const onClick = () => setIsExpanded(!isExpanded);

  const onChange = (e) => {
    dispatch({ type: FILTER_INVOICES, payload: e.target.value });
    setIsExpanded(false);
  };

  return (
    <Wrapper>
      <DropdownButton type="button" onClick={onClick} isExpanded={isExpanded}>
        Filter by status
      </DropdownButton>
      {isExpanded && (
        <DropdownWrapper>
          <CustomRadio
            name="invoices-filter"
            id="all"
            label="All"
            value="all"
            checked={filter === 'all'}
            onChange={onChange}
          />
          <CustomRadio
            name="invoices-filter"
            id="draft"
            label="Draft"
            value="draft"
            checked={filter === 'draft'}
            onChange={onChange}
          />
          <CustomRadio
            name="invoices-filter"
            id="pending"
            label="Pending"
            value="pending"
            checked={filter === 'pending'}
            onChange={onChange}
          />
          <CustomRadio
            name="invoices-filter"
            id="paid"
            label="Paid"
            value="paid"
            checked={filter === 'paid'}
            onChange={onChange}
          />
        </DropdownWrapper>
      )}
    </Wrapper>
  );
}

export default FilterDropdown;
