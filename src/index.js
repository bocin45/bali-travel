import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Sidebar from './components/Sidebar';
import Sidebar from './components/Sidebar';
import Home from './components/Home/Home';
import reportWebVitals from './reportWebVitals';
import Features from './components/Features/Feature';
import RecentProject from './components/RecentProjects/RecentProject';

ReactDOM.render(
  <React.StrictMode>
    {/* <Sidebar /> */}
    <Home />
    <Features />
    <RecentProject />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
