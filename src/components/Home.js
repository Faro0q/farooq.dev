import React from 'react'
import styled from 'styled-components/macro'
import ReactRoundedImage from "react-rounded-image";
import pic from '../images/me-pic.png'

const ProfileSection = styled.a`
    height: 100vh;
    max-height: 1100px;
    position:relative;
    overflow: hidden;
    borderRadius: 40;
`;

const ProfileWrapper = styled.div`
    padding-top: 30px;
    padding-bottom: 20px;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

const Home = () => {
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
                hoverColor="black"
                object-fit="cover"
                />
            </ProfileWrapper>
        </ProfileSection>
    )
}

export default Home
