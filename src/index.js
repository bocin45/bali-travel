import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomeBar from './components/HomeBar/HomeBar'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import './bootstrap.min.css'
import './datepicker.css'
import './templatemo-style.css'
import Highlight from './components/Highlight/Highlight';
import Region from './components/Region/Region';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './components/Pages/Home'
import About from './components/Pages/About'

ReactDOM.render(
  <React.StrictMode>
    {/* <HomeBar /> */}
    <Router>
      <NavBar />
      <div className="tm-page-wrap mx-auto">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
