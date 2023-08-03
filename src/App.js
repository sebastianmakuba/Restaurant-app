import React from 'react';
import './index.css';
import Login from './Restaurant/Login';
import UpdateMenu from './Restaurant/UpdateMenu';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
// import PlaceOrder from './Customer/PlaceOrder';
import AddItemstoCart from './Customer/AddItemstoCart';
import DisplayMenu from './Customer/DisplayMenu';
import Home from './Home';
import Customers from './Customers';
import Restaurantowners from './RestaurantOwners';



function App() {
  return (
    <>
      <Navbar/>
     
      <Routes>        
        <Route path='/' element = {<Home/>} >
          <Route path='customers' element = {<Customers/>}>
          <Route path='additemstocart' element = {<AddItemstoCart/>} />
          <Route path='displaymenu' element = {<DisplayMenu/>} />
          {/* <Route path='filterbycuisne' element = {<FilterBy/>} /> */}
          
          {/* <Route path='placeorder' element = {<PlaceOrder/>} />          */}
          </Route>
          <Route path='restaurantowners' element = {<Restaurantowners/>}>
          <Route path='login' element = {<Login/>} />
          <Route path='updatemenu' element = {<UpdateMenu/>} />
          <Route path='showavailability' element = {<ShowAvailability/>} />
          <Route path='confirmorder' element = {<ConfirmOrder/>} />
          </Route>
        </Route>
        
     </Routes>
     

  </>
  )
  }

export default App;
//
