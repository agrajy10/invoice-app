import logo from '../../assets/logo.svg';
import UserAvatar from './UserAvatar';

function Header() {
  return (
    <header>
      <img src={logo} alt="Invoice app logo" />
      <UserAvatar />
    </header>
  );
}

export default Header;
