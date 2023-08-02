import React, { useState, useEffect } from "react";

export default function UpdateMenu() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState("");
  const [dishName, setDishName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Fetch the list of restaurants on component mount
  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      
  }, []);

  const addDish = (event) => {
    event.preventDefault();

    const newDish = {
      food: dishName,
      price: parseInt(price),
      restaurant_id: parseInt(selectedRestaurantId),
      image_url: imageUrl,

     
    };

    // Send the data to the server (JSON server)
    fetch("http://localhost:3000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDish),
    })
      .then((response) => response.json())
      .then((data) => {
        // Clear the form fields after successful dish addition
        setSelectedRestaurantId("");
        setDishName("");
        setPrice("");
        setImageUrl("");
      })
      alert ('Food item has been added successfully')
  };

  return (
    <>
      <h1>Add Food</h1>
      <form className="center" onSubmit={addDish}>
        <div className="mb-3 w-50">
          <label htmlFor="restaurantSelect" className="form-label">
            Select Restaurant Name
          </label>
          <select
            id="restaurantSelect"
            className="form-select"
            value={selectedRestaurantId}
            onChange={(e) => setSelectedRestaurantId(e.target.value)}
            required
          >
            <option value="">Select your Restaurant</option>
            {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter the name of the dish
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Dish
        </button>
      </form>
    </>
  );
}
