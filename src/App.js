import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Resume from './pages/Resume';
import Error from './pages/Error';
import Navigation from './components/Navbar'
import SocialFollow from './components/SocialFollow';
import GlobalStyle from './globalStyles.js';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About} />
             <Route path="/courses" component={Courses}/>
             <Route path="/resume" component={Resume}/>
             <Route component={Error}/>
           </Switch>
           <SocialFollow />
           <GlobalStyle/>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;

