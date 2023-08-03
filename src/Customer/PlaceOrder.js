import React, { useEffect, useState } from 'react';
import DisplayMenu from './DisplayMenu';
import FilterByCuisine from './FilterByCuisine';

function PlaceOrder() {
  const [data, setData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]); // Initialize with an empty array

  useEffect(() => {
    fetch('http://localhost:3000/orders')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredFood(data.food); // Set filteredFood when data is fetched
      });
  }, []);

  const handleAddToCart = (item, quantity) => {
    const newItem = { ...item, quantity };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const handleFilterByCuisine = (cuisine) => {
    if (cuisine === '') {
      setFilteredFood(data.food);
    } else {
      const filtered = data.food.filter((item) =>
        item.restaurant_name.toLowerCase().includes(cuisine.toLowerCase())
      );
      setFilteredFood(filtered);
    }
  };

  const handleRemoveFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (data === null) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="cart-container">
      <FilterByCuisine
        restaurants={data.restaurants}
        onFilter={handleFilterByCuisine}
      />
      <div>
        {filteredFood && filteredFood.map((foodItem) => (
          <DisplayMenu
            key={foodItem.id}
            foodItem={foodItem}
            cartItems={cartItems}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.food} - Quantity: {item.quantity}{' '}
              <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${calculateTotalPrice().toFixed(2)}</p>
      </div>
    </div>
  );
}

export default PlaceOrder;
