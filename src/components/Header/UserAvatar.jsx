import styled from 'styled-components';

import deviceSize from '../../styles/breakpoints';

import avatar from '../../assets/image-avatar.jpg';

const AvatarContainer = styled.div`
  padding: 0 1.5rem;
  display: flex;
  border-left: 1px solid #494e6e;

  @media screen and (min-width: ${deviceSize.lg}) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem;
    border-left: none;
    border-top: 1px solid #494e6e;
    margin: 0;
  }
`;

const AvatarImageHolder = styled.div`
  margin: auto;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
  @media screen and (min-width: ${deviceSize.lg}) {
    width: 2.5rem;
    height: 2.5rem;
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
