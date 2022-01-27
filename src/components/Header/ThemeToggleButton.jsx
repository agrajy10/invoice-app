import { useContext } from 'react';
import styled from 'styled-components';
import { Switch } from '@headlessui/react';

import { AppContext } from '../../context/AppContext';

import { ENABLE_DARK_MODE, DISABLE_DARK_MODE } from '../../actions';

import deviceSize from '../../styles/breakpoints';

import { ReactComponent as IconSun } from '../../assets/icon-sun.svg';
import { ReactComponent as IconMoon } from '../../assets/icon-moon.svg';

const Button = styled(Switch)`
  width: 1.875rem;
  height: 1.875rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 1.4375rem;
  align-self: center;
  color: ${({ theme }) => theme.themeToggleButton.color};
  &:hover {
    color: ${({ theme }) => theme.themeToggleButton.hover.color};
  }
  @media screen and (min-width: ${deviceSize.lg}) {
    margin: 0 auto;
    position: absolute;
    bottom: 117px;
    left: 0;
    right: 0;
  }
`;

function ThemeToggleButton() {
  const { dispatch, theme, themeToggler } = useContext(AppContext);

  const onChange = () => {
    if (theme === 'light') {
      dispatch({ type: ENABLE_DARK_MODE });
    } else {
      dispatch({ type: DISABLE_DARK_MODE });
    }
  };

  return (
    <Button
      checked={theme === 'dark' ? true : false}
      onChange={onChange}
      aria-label="Toggle dark mode">
      <span aria-hidden="true">{theme === 'light' ? <IconMoon /> : <IconSun />}</span>
    </Button>
  );
}

export default ThemeToggleButton;
