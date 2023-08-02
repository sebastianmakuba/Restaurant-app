// Each food on the menu should have a price and restaurant name/category  Ethiopian food, Nigerian food, Congolese food, Kenyan food etc.
import React, { useState } from "react";
import "./App.css";

const data = {
  "restaurants": [
    {
      "id": 1,
      "name": "Bakhita's African Cuisines",
      "contact": "0792336957"
    },
    {
      "id": 2,
      "name": "Served by Anita",
      "contact": "0115455076"
    },
    {
      "id": 3,
      "name": "Sebastian",
      "contact": "07123456"
    }
  ],
  "food": [
    {
      "id": 1,
      "food": "Ugali Matumbo",
      "price": 456,
      "restaurant_id": 1,
      "image_url": "https://example.com/images/ugali_matumbo.jpg"
    },
    {
      "id": 2,
      "food": "Rice Beef",
      "price": 500,
      "restaurant_id": 2,
      "image_url": "https://example.com/images/rice_beef.jpg"
    }
  ],
  "orders": [
    {
      "id": 1,
      "food_id": 2,
      "table_no": 17,
      "timestamp": "2023-07-31",
      "restaurant_id": 2
    },
    {
      "id": 2,
      "food_id": 5,
      "table_no": 7,
      "timestamp": "2023-07-30",
      "restaurant_id": 5
    }
  ]
};

function App ()  {
  const [cuisineFilter, setCuisineFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Organize data into separate arrays
  const restaurants = data.restaurants;
  const foodItems = data.food;

  const filteredMenuItems = foodItems
    .filter((item) => {
      // Get the restaurant name for the current food item
      const restaurantName = restaurants.find((rest) => rest.id === item.restaurant_id)?.name || "";
      // Apply the cuisine filter
      return !cuisineFilter || restaurantName.toLowerCase().includes(cuisineFilter.toLowerCase());
    })
    .sort((item1, item2) => {
      // Apply the price filter - sort by lowest or highest price
      if (priceFilter === "lowest") {
        return item1.price - item2.price;
      } else if (priceFilter === "highest") {
        return item2.price - item1.price;
      } else {
        return 0; // No sorting
      }
    });

  return (
    <div className="container">
      <h1>Menu</h1>

      {/* Add filter options to the UI */}
      <div className="filters">
        <label>
          Cuisine:
          <input type="text" value={cuisineFilter} onChange={(e) => setCuisineFilter(e.target.value)} />
        </label>

        <label>
          Price:
          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="">All</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </label>

        <label>
          Category:
          <input type="text" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} />
        </label>
      </div>

      {filteredMenuItems.map((item, index) => (
        <div key={index}>
          <h2>{item.food}</h2>
          <p>Price: ${item.price}</p>
          <p>Restaurant: {restaurants.find((rest) => rest.id === item.restaurant_id)?.name || "Unknown"}</p>
          <img src={item.image_url} alt={item.food} style={{ maxWidth: "200px" }} />
        </div>
      ))}
    </div>
  );
};

export default App;
