import React from 'react'
import styled, {css} from 'styled-components/macro'

const ProfileSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position:relative;
    overflow: hidden;
`;

const ProfileWrapper = styled.div`
    width: 100%;
    height: 50%;
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
                <h1>Heroo</h1>
            </ProfileWrapper>
        </ProfileSection>
    )
}

export default ProfilePic
