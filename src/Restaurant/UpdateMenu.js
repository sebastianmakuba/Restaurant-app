import React, { useState } from "react";

export default function UpdateMenu() {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantId, setRestaurantId] = useState("");
  const [dishName, setDishName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addDish = (event) => {
    event.preventDefault();

    const newDish = {
      food: dishName,
      price: parseInt(price),
      restaurant_id: parseInt(restaurantId),
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
        setRestaurantName("");
        setRestaurantId("");
        setDishName("");
        setPrice("");
        setImageUrl("");
      })
      .catch((error) => {
        console.error("Error adding dish:", error);
      });
  };

  return (
    <>
      <h1>Add Food</h1>
      <form className="center" onSubmit={addDish}>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Restaurant Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={restaurantName}
            onChange={(e) => setRestaurantName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Restaurant Id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={restaurantId}
            onChange={(e) => setRestaurantId(e.target.value)}
            required
          />
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
