import avatar from '../../assets/image-avatar.jpg';

function UserAvatar() {
  return (
    <div>
      <div>
        <img src={avatar} alt="User profile picture" />
      </div>
    </div>
  );
}

export default UserAvatar;
