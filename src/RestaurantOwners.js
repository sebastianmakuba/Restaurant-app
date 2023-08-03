import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Restaurantowners (){
    
    return (
    <>

    <nav>
       
        
        <Link to={'login'}>Register Your Restaurant</Link>
        <Link to={'showavailability'}>Show Available Tables</Link>
        <Link to={'updatemenu'}>Update Your Menu</Link> 
        <Link to={'confirmorder'}>Confirm Order</Link>           
    </nav>
  
        <Outlet/>
    </>
    )   
}