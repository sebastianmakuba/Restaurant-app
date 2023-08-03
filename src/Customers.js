import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Customers (){
    
    return (
    <>
       
        <nav>        
        <Link to={'displaymenu'}>See Our Menu</Link>
        <Link to={'additemstocart'}>Add Items</Link>
        {/* <Link to={'filterbycuisine'}>Filter</Link> */}
        <Link to={'itemscard'}>View Your Order</Link>
        <Link to={'placeorder'}>Place Order</Link>
        
        
        </nav>
        <Outlet/>
    </>
    )   
}