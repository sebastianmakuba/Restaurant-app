import { Link } from "react-router-dom" 

 export default function Navbar (){


    return (
        <nav>
        <Link to={'/'}>Register Restaurant</Link>
        <Link to={'/updatemenu'}>UpdateMenu</Link>
        </nav>
    )
 }