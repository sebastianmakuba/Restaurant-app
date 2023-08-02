import React from 'react';
import './index.css';
import Login from './Restaurant/Login';
import UpdateMenu from './Restaurant/UpdateMenu';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Restaurant/Navbar';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Login/>} />
        <Route path='/updatemenu' element = {<UpdateMenu/>} />
     </Routes>
  </>
  )
  }

export default App;
