import { useContext } from 'react';
import styled from 'styled-components';
import { Popover } from '@headlessui/react';

import CustomRadio from './CustomRadio';

import { AppContext } from '../context/AppContext';

import { FILTER_INVOICES } from '../actions';

import IconArrowDown from '../assets/icon-arrow-down.svg';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownButton = styled(Popover.Button)`
  display: block;
  width: 190px;
  border: none;
  background-color: transparent;
  font-family: Spartan, sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.h1};
  letter-spacing: -0.25px;
  cursor: pointer;
  &:after {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: url(${IconArrowDown}) no-repeat center;
    transform-origin: center;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
    margin-left: 16px;
  }
`;

const DropdownWrapper = styled(Popover.Panel)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.filterDropdown.dropdown.bg};
  width: 192px;
  padding: 24px;
  margin-top: 23px;
  z-index: 777;
  & > span {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }
  div label:not(:last-child) {
    margin-bottom: 16px;
  }
`;

function FilterDropdown() {
  const { filter, dispatch } = useContext(AppContext);

  const onChange = (e) => {
    dispatch({ type: FILTER_INVOICES, payload: e.target.value });
  };

  return (
    <Wrapper>
      <Popover>
        {({ open }) => {
          return (
            <>
              <DropdownButton open={open}>Filter by status</DropdownButton>
              <DropdownWrapper>
                <span id="lbl">filter by status</span>
                <div
                  role="radiogroup"
                  aria-labelledby="lbl"
                  aria-activedescendant={filter}
                  tabIndex="0">
                  <CustomRadio
                    name="invoices-filter"
                    id="all"
                    label="All"
                    value="all"
                    checked={filter === 'all'}
                    aria-checked={filter === 'all' ? true : false}
                    onChange={onChange}
                  />
                  <CustomRadio
                    name="invoices-filter"
                    id="pending"
                    label="Pending"
                    value="pending"
                    checked={filter === 'pending'}
                    aria-checked={filter === 'pending' ? true : false}
                    onChange={onChange}
                  />
                  <CustomRadio
                    name="invoices-filter"
                    id="draft"
                    label="Draft"
                    value="draft"
                    checked={filter === 'draft'}
                    aria-checked={filter === 'draft' ? true : false}
                    onChange={onChange}
                  />
                  <CustomRadio
                    name="invoices-filter"
                    id="paid"
                    label="Paid"
                    value="paid"
                    checked={filter === 'paid'}
                    aria-checked={filter === 'paid' ? true : false}
                    onChange={onChange}
                  />
                </div>
              </DropdownWrapper>
            </>
          );
        }}
      </Popover>
    </Wrapper>
  );
}

export default FilterDropdown;
