import React, { useEffect, useState } from 'react';

import ItemsCard from './ItemsCard';
import SearchBar from './SearchBar'

function AddItemstoCart() {
  const [food, setFood] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const [restaurantNames, setRestaurantNames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/food')

      .then((response) => response.json())
      .then((data) => {
        setFood(data);
      });
  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/restaurants')
      .then((response) => response.json())
      .then((data) => {
        setRestaurantNames(data);
      })
      .catch((error) => {
        console.error('Error fetching restaurant data:', error)
      })
  }, []);

  function handleSubmit(item) {
    const newPrice = totalPrice + item.price;
    setCart([...cart, item]);
    setTotalPrice(newPrice);
  }

  
  const handlePlaceOrder = () => {
    const orderItems = cart.map((item) => ({
      food_id: item.id,
      table_no: 17,
      timestamp: new Date().toISOString(),
      restaurant_id: item.restaurant_id,
    }));

    setIsPlacingOrder(true);
    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderItems),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsPlacingOrder(false);
        setCart([]);

        setShowPopup(true);
        const randomTableNumber = Math.floor(Math.random() * 101); // Generate random table number
        const chosenRestaurant = restaurantNames.find((restaurant) => restaurant.id === cart[0].restaurant_id);
        const restaurantName = chosenRestaurant ? chosenRestaurant.name : 'Unknown Restaurant';
        setTimeout(() => {
          setShowPopup(false);
          alert(`Order placed successfully!\nYour table number is ${randomTableNumber}\nRestaurant chosen is ${restaurantName}`);
        }, 3000);
      });
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredFood = food.filter((item) =>
      item.food.toLowerCase().includes(query.toLowerCase())
    );
    setFood(filteredFood);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <h1>Our Top Picks</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {food.filter((item) =>
            item.food.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((item) => (
            <ItemsCard key={item.id} onSubmit={() => handleSubmit(item)} item={item} />
          ))}
        </div>
        <div className="total">
          <p>Cart Length {cart.length} </p>
          {cart.map((item, index) => (
            <div key={index}>
              <p>
                {item.food} {item.price}
              </p>
              <button onClick={() => setCart(cart.filter((_, i) => i !== index))}>Remove</button>
            </div>
          ))}
          <p>Total Price {cart.reduce((accumulator, item) => accumulator + item.price, 0)}</p>
        </div>
        <button
          className="place-order-button"
          onClick={handlePlaceOrder}
          disabled={isPlacingOrder || cart.length === 0}
        >
          {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
        </button>
        {showPopup &&
          <div className="popup">
          </div>
        }
      </section>
    </>
  );
}

export default AddItemstoCart;