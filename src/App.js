import React from 'react'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic';
import GlobalStyle from './globalStyles';


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <ProfilePic />
    </>
  );
}

export default App;
