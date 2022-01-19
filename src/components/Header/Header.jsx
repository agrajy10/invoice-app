import logo from '../../assets/logo.svg';
import UserAvatar from './UserAvatar';

function Header() {
  return (
    <header className="bg-[#373B53] flex sm:block sm:fixed sm:top-0 sm:left-0 sm:h-full sm:rounded-tr-[1.25rem] sm:rounded-br-[1.25rem]">
      <img
        src={logo}
        alt="Invoice app logo"
        className="w-[4.5rem] h-[4.5rem] sm:w-[6.43rem] sm:h-[6.43rem]"
      />
      <UserAvatar />
    </header>
  );
}

export default Header;
