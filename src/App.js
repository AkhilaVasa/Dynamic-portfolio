import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Userlist from './pages/Userlist';
import Createuser from './pages/Createuser';
import Edituser from './pages/Edituser';
import Editprofile from './pages/Editprofile';
import Profile from './pages/Profile';
import Update from './pages/Updatepage';
import Mainpage from './pages/Mainpage';



function App() {
  return (
    <>
     
      <Router>
        <Navbar />
        
        <Switch>
          
          <Route path='/' exact component={Mainpage} /> 
          <Route path='/userlist' component={Userlist} />
          <Route path='/createuser'  component={Createuser} />
          <Route path='/edituser'  component={Edituser} />
          <Route path='/profile' component={Profile} />
          <Route path='/editprofile' component={Editprofile} />
          <Route path='/update' component={Update} />

        </Switch>
        
      </Router>
    </>
  );
}

export default App;
