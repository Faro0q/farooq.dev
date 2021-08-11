// import React from 'react'
// import Navbar from './components/Navbar'
// import Home from './components/Home';
// import SocialFollow from './components/SocialFollow';
// import GlobalStyle from './globalStyles';


// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <Navbar />
//       <Home />
//       <SocialFollow />
//     </>
//   );
// }

// export default App;



import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
// import Error from './components/Error';
import Navigation from './components/Navbar'
import SocialFollow from './components/SocialFollow';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Courses}/>
            {/* <Route component={Error}/> */}
           </Switch>
           <SocialFollow />
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;

