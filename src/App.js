import React from 'react'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic';
import SocialFollow from './components/SocialFollow';
import GlobalStyle from './globalStyles';


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ProfilePic />
      <SocialFollow />
    </>
  );
}

export default App;
