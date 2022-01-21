import styled from 'styled-components';

import IconPlus from '../assets/icon-plus.svg';

const buttonVariantsColor = {
  primary: {
    bg: '#7C5DFA',
    color: '#FFFFFF',
    hover: {
      bg: '#9277FF',
      color: '#FFFFFF'
    }
  },
  secondary: {
    bg: '#F9FAFE',
    color: '#7E88C3',
    hover: {
      bg: '#DFE3FA',
      color: '#7E88C3'
    }
  },
  tertiary: {
    bg: '#373B53',
    color: '#888EB0',
    hover: {
      bg: '#0C0E16',
      color: '#888EB0'
    }
  },
  warning: {
    bg: '#EC5757',
    color: '#FFFFFF',
    hover: {
      bg: '#FF9797',
      color: '#FFFFFF'
    }
  }
};

const ButtonBase = styled.button`
  display: inline-block;
  font-family: Spartan, sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.25px;
  line-height: 1;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  user-select: none;
  background-color: ${(props) => buttonVariantsColor[props.variant].bg};
  color: ${(props) => buttonVariantsColor[props.variant].color};
  &:hover {
    background-color: ${(props) => buttonVariantsColor[props.variant].hover.bg};
    color: ${(props) => buttonVariantsColor[props.variant].hover.color};
  }
`;

const TextButton = styled(ButtonBase)`
  padding: 16px 18px;
`;

const IconButton = styled(ButtonBase)`
  position: relative;
  padding: 16px 16px 16px 56px;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  background-color: #ffffff;
  border-radius: 50%;
`;

function Button({ children, className, icon, onClick, type = 'button', variant = 'primary' }) {
  return icon ? (
    <IconButton className={className} onClick={onClick} type={type} variant={variant}>
      <IconWrapper>
        <img src={IconPlus} alt="" />
      </IconWrapper>
      {children}
    </IconButton>
  ) : (
    <TextButton className={className} onClick={onClick} type={type} variant={variant}>
      {children}
    </TextButton>
  );
}

export default Button;
