import { Link } from "react-router-dom" 

 export default function Navbar (){


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="register-nav">
        <Link to={'/'}>Register Restaurant</Link>
             </div>
             <div className="register-nav">
        <Link to={'/updatemenu'}>UpdateMenu</Link>
            </div>
            <div className="register-nav">
        <Link to={'/placeOrder'}>Place Order</Link>
        <Link to={'/additems'}>Add Items</Link>
        {/* <Link to={'/placeOrder'}>Place Order</Link> */}
            </div>
        </nav>

    )
 }