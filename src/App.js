import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import './App.css';

// 컴포넌트 import
import MainPage from './Component/MainPage';
import Login from './Component/Login';
import SignIn from './Component/SignIn';
import RecommendList from './Component/RecommendList';

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
        {/* 주소가 /라면 아래 실행 */}
        <Route exact path="/">
          <div className="App" style={scrollfix ? fixcss : null}>
            <MainPage path="/" scrollfix={(aa) => {setScrollfix(aa)}}></MainPage>
          </div>
        </Route>

        {/* 주소가 /Login이라면 아래 실행 */}
        <Route exact path="/Login">
            <Login/>
        </Route>

        <Route exact path="/SingIn">
            <SignIn/>
        </Route>

        <Route exact path="/RecommendList">
            <RecommendList/>
        </Route>

      </Switch>
    </Router>
  );

  


        

}

export default App;
