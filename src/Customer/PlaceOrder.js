import React, { useEffect, useState } from 'react'
import DisplayMenu from './DisplayMenu'


function PlaceOrder() {
    const[data, setData] = useState('');
    const[cartItems, setCartItems] = useState([]);
    useEffect(()=>{
        fetch(' http://localhost:3000/orders')
        .then((response)=>response.json())
        .then((data)=>{
            setData(data);
        })
      
    }, []);

    const handleAddToCart = (item, quantity)=>{
        const newItem = {...item, quantity};
        setCartItems((prevItems)=>[...prevItems, newItem]);
    }
  return (
    <div className="cart-container">
    {data ? (
      <>
        <div className="menu">
          {data.orders.map((order) => (
            <DisplayMenu key={order.id} order={order} handleAddToCart={handleAddToCart} />
          ))}
        </div>
        <div className="cart">
        <h2>Cart</h2>
            <ul>
              {cartItems.map((cartItem) => (
                <li key={cartItem.id}>
                  {cartItem.food} - Quantity: {cartItem.quantity} - Total: ${(
                    cartItem.price * cartItem.quantity
                  ).toFixed(2)}
                </li>
              ))}
            </ul>
            <button onClick={() => alert('Order Placed!')}>Place Order</button>
          </div>
            
      </>
    ) : (
      <p>Loading data...</p>
    )}
  </div>
  )
}

export default PlaceOrder