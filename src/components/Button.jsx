import { registerLocale } from 'react-datepicker';
import styled from 'styled-components';

import IconPlus from '../assets/icon-plus.svg';

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
  background-color: ${({ variant, theme }) => theme.button[variant].bg};
  color: ${({ variant, theme }) => theme.button[variant].color};
  &:hover {
    background-color: ${({ variant, theme }) => theme.button[variant].hover.bg};
    color: ${({ variant, theme }) => theme.button[variant].hover.color};
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

function Button({
  children,
  className,
  icon,
  onClick,
  type = 'button',
  variant = 'primary',
  ...rest
}) {
  return icon ? (
    <IconButton className={className} onClick={onClick} type={type} variant={variant} {...rest}>
      <IconWrapper>
        <img src={IconPlus} alt="" />
      </IconWrapper>
      {children}
    </IconButton>
  ) : (
    <TextButton className={className} onClick={onClick} type={type} variant={variant} {...rest}>
      {children}
    </TextButton>
  );
}

export default Button;
