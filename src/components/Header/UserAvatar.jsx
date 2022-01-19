import styled from 'styled-components';

import breakpoint from '../../styles/breakpoints';

import avatar from '../../assets/image-avatar.jpg';

const AvatarContainer = styled.div`
  padding: 0 24px;
  margin-left: auto;
  display: flex;
  border-left: 1px solid #494e6e;

  @media only screen and ${breakpoint.device.lg} {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 24px;
    border-left: none;
    border-top: 1px solid #494e6e;
    margin: 0;
  }
`;

const AvatarImageHolder = styled.div`
  margin: auto;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  @media only screen and ${breakpoint.device.lg} {
    width: 40px;
    height: 40px;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function UserAvatar() {
  return (
    <AvatarContainer>
      <AvatarImageHolder>
        <AvatarImage src={avatar} alt="User profile picture" />
      </AvatarImageHolder>
    </AvatarContainer>
  );
}

export default UserAvatar;
