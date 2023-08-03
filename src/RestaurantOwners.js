import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Restaurantowners (){
    
    return (
    <>

    <nav>
       
        {/* <Link to={'confirmorder'}>Add Items</Link> */}
        <Link to={'login'}>Register Your Restaurant</Link>
        <Link to={'showavailability'}>Show Available Food</Link>
        <Link to={'updatemenu'}>Update Your Menu</Link>            
    </nav>
  
        <Outlet/>
    </>
    )   
}