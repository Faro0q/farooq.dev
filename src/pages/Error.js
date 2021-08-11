import React from 'react';
import styled from 'styled-components';
import pic from '../images/smaller404.png';
import { Helmet } from 'react-helmet';

const ProfileSection = styled.a`
    height: 10vh;
    max-height: 1100px;
    position:relative;
    overflow: hidden;
    borderRadius: 40;
`;

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
`;

const Error = () => (
  <ProfileSection>
    <Helmet>
      <title>Error | Farooq Syed</title>
      </Helmet>
    <ProfileWrapper>
        <img src={pic} alt="Logo" />
    </ProfileWrapper>
  </ProfileSection>
);

export default Error;