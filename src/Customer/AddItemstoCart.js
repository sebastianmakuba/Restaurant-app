// Customers should add items to a cart and see the order summary before placing an order.
import {useEffect, useState} from "react";
import ItemsCard from "./ItemsCard";
import SearchBar from "./SearchBar";

function AddItemstoCart(){
    const [food,setFood] = useState([])
    const [totalPrice,setTotalPrice] = useState(0)
    const[cart,setCart] = useState([])

    
  useEffect(
    ()=>{
        fetch("http://localhost:3000/food")
        .then((response) => response.json())
        .then((data) => {
           setFood(data)
           //setPrice([...price,data])
           console.log(data)
           //console.log(food)
          
        })
         
    },  []
  )

  useEffect(
    ()=>{
        fetch("http://localhost:3000/cart")
        .then(response => response.json())
        .then((data) => {
           setCart(data)
           
           
          
        })
         
    }, []
  )
    function handleSubmit(item){
        const newPrice = totalPrice + item.price
     setCart([...cart,item])
     setTotalPrice(newPrice)
    }

    
return(
     <>
     <SearchBar/>
     <h1>Our Top Picks</h1>
     <section className="py-4 container">
        <div className="row justify-content-center">
           
            {food.map(item=>(
         <ItemsCard key ={item.id}  onSubmit={()=>handleSubmit(item)} item = {item}/>
      ))}

        </div>
        {/* <p>Cart Length {cart.length} </p> */}
        
        <div className="total">
        <p>Cart Length {cart.length} </p>
            {cart.map((item,index)=>(
                <div key={index}>
                    <p>{item.food } {item.price} </p> 
                    {/* <button onClick={()=>setCart()}>Remove</button> */}
                    </div>
                
            ))}
            <p> Total Price {cart
                  .reduce(
                    (accumulator, item) => accumulator + item.price,
                    0
                  )
                  }</p>
                

        </div>
        

     </section> 
     
     </>   
       
    )
}

export default AddItemstoCart ;