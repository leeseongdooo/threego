import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import './App.css';

// 컴포넌트 import
import MainPage from './Component/MainPage';
import Login from './Component/Login';

function App() {
  
  const fixcss = {
    position: 'fixed',
    top: '-${window.scrollY}px',
    overflow: 'scroll',
    width: '100%'
  }

  const [scrollfix, setScrollfix] = useState();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App" style={scrollfix ? fixcss : null}>
            <MainPage path="/" scrollfix={(aa) => {setScrollfix(aa)}}></MainPage>
          </div>
        </Route>

        <Route exact path="/Login">
            <div className="App" style={scrollfix ? fixcss : null}>
                <Login/>
            </div>
        </Route>
      </Switch>
    </Router>
  );

  


        

}

export default App;
