import React from 'react'
import styled from 'styled-components/macro'
import ReactRoundedImage from "react-rounded-image";
import pic from '../images/me-pic.png'

const ProfileSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position:relative;
    overflow: hidden;
    borderRadius: 40;
`;

const ProfileWrapper = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

const ProfilePic = () => {
    return (
        <ProfileSection>
            <ProfileWrapper>
            <ReactRoundedImage
                image={pic}
                roundedColor="green"
                imageWidth="400"
                imageHeight="500"
                roundedSize="10"
                borderRadius="500"
                hoverColor="#DD1144"
                />
            </ProfileWrapper>
        </ProfileSection>
    )
}

export default ProfilePic
