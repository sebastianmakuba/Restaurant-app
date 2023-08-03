import React from "react";
import { Link , Outlet} from "react-router-dom";
export default function Home (){


    return (
        <>
            <nav>
                <ul>
                    <li>
            <Link to={'restaurantowners'}>Restaurant Owners</Link>
            </li>
            <li>
            <Link to={'customers'}>Customers</Link>
            </li>
            </ul>
            </nav>
            <Outlet/>
        </>      
    )
}