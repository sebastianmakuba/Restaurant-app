import React from 'react';
import './index.css';
import Login from './Restaurant/Login';
import UpdateMenu from './Restaurant/UpdateMenu';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Restaurant/Navbar';
import PlaceOrder from './Customer/PlaceOrder';
import AddItemstoCart from './Customer/AddItemstoCart';
import DisplayMenu from './Customer/DisplayMenu';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Login/>} />
        <Route path='/displaymenu' element = {<DisplayMenu/>} />
        <Route path='/updatemenu' element = {<UpdateMenu/>} />
        <Route path='/placeOrder' element = {<PlaceOrder/>} />
        <Route path='/additems' element = {<AddItemstoCart/>} />
     </Routes>

  </>
  )
  }

export default App;
//
