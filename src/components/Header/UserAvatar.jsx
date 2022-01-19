import avatar from '../../assets/image-avatar.jpg';

function UserAvatar() {
  return (
    <div className="ml-auto px-6 border-l border-l-[#494E6E] flex sm:absolute sm:w-full sm:py-6 sm:bottom-0 sm:left-0 sm:border-l-0 sm:border-t sm:border-t-[#494E6E]">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden m-auto">
        <img src={avatar} alt="User profile picture" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default UserAvatar;
