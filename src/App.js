import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {

  const apiKey = '86cbc37f87754046a6a07cb06f9e5a0f';
  // apiKey = process.env.REACT_APP_NEWS_API

  const pageSize = 8;

  const [progress, setProgress] = useState(0)

    return (
      <>
      <Router>
      <Navbar/>
      {/* loading bar install kro npm package h */}
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}  
      />
      <Routes>
        <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize ={pageSize} country="in" category="general"/>} />
        <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize ={pageSize} country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize ={pageSize} country="in" category="entertainment"/>} />
        <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize ={pageSize} country="in" category="health"/>} />
        <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize ={pageSize} country="in" category="science"/>} />
        <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize ={pageSize} country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize ={pageSize} country="in" category="technology"/>} />
        <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize ={pageSize} country="in" category="general"/>} />
        <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize ={pageSize} country="in" category="general"/>} />

      </Routes>

      </Router>
      </>
    
    )
  }

  export default App;

